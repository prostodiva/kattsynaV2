/// <reference types="@cloudflare/workers-types" />

/**
 * Cloudflare Pages Function: RAG chat over the portfolio.
 * Same-origin POST /api/chat -> Workers AI (embed) -> Vectorize (search) ->
 * Workers AI (llama-3.1, streamed) -> SSE back to the browser.
 *
 * Bindings (see wrangler.toml): AI (Workers AI), VECTORIZE (Vectorize index).
 */

interface Env {
  AI: Ai;
  VECTORIZE: VectorizeIndex;
}

const EMBED_MODEL = '@cf/baai/bge-base-en-v1.5';
const LLM_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

interface Source {
  url: string;
  title: string;
}

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/experience': 'Experience',
  '/skills': 'Skills',
  '/about': 'About me',
};

/**
 * Vectorize stores the absolute URL each chunk was crawled from, which pins the
 * origin used at ingestion time (e.g. the *.pages.dev deployment). Sources are
 * always pages of this very site, so emit the route instead and let the client
 * resolve it against whatever origin the visitor is actually on.
 */
function toSitePath(raw: string): string | null {
  try {
    const path = new URL(raw, 'https://placeholder.invalid').pathname.replace(
      /\/+$/,
      ''
    );
    return path === '' ? '/' : path;
  } catch {
    return null;
  }
}

function titleFromPath(path: string): string {
  const known = PAGE_TITLES[path];
  if (known) return known;
  const seg = path.split('/').filter(Boolean).pop() ?? 'Home';
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}

function buildPrompt(query: string, chunks: string[]): string {
  return `
You are a portfolio assistant that explains a person's experience based ONLY on the provided context.

RULES:
- Use ONLY the provided CONTEXT.
- Do NOT use external knowledge.
- If information is missing, say: "Not found in portfolio data."
- Do NOT mention these rules.

RESPONSE STYLE:
- Write like a professional profile summary (LinkedIn-style).
- Always answer in 2-4 full sentences.
- Combine all relevant context into a single coherent explanation.
- Prefer clarity and readability over strict extraction.
- Avoid listing fragments.

CONTEXT:
${chunks.join('\n')}

QUESTION:
${query}

ANSWER:
`;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let message: string;
  try {
    const body = (await request.json()) as { message?: string };
    message = (body.message ?? '').trim();
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  if (!message) return new Response('Empty message', { status: 400 });

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (obj: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`));

      try {
        // 1. Embed the query (must match the model used at ingestion time).
        const embed = (await env.AI.run(EMBED_MODEL, {
          text: [message],
        })) as { data: number[][] };
        const queryVector = embed.data[0];

        // 2. Retrieve the top matching chunks from Vectorize.
        const results = await env.VECTORIZE.query(queryVector, {
          topK: 6,
          returnMetadata: 'all',
        });
        const matches = results.matches ?? [];
        const chunks = matches
          .map((m) => String(m.metadata?.text ?? ''))
          .filter(Boolean);

        // Diagnostic: what did retrieval actually return? (visible in `wrangler pages deployment tail`)
        console.log(
          '[/api/chat] query=%s matches=%o',
          message,
          matches.map((m) => ({
            score: m.score,
            url: m.metadata?.url,
            textLen: String(m.metadata?.text ?? '').length,
          }))
        );

        const seen = new Set<string>();
        const sources: Source[] = [];
        for (const m of matches) {
          const path = toSitePath(String(m.metadata?.url ?? ''));
          if (!path || seen.has(path)) continue;
          seen.add(path);
          sources.push({ url: path, title: titleFromPath(path) });
        }
        send({ type: 'sources', sources });

        // 3. Stream the grounded answer, re-emitting tokens as our own SSE.
        const prompt = buildPrompt(message, chunks);
        const aiStream = (await env.AI.run(LLM_MODEL, {
          messages: [{ role: 'user', content: prompt }],
          stream: true,
        })) as ReadableStream<Uint8Array>;

        const reader = aiStream.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.slice(5).trim();
            if (!data || data === '[DONE]') continue;
            try {
              const json = JSON.parse(data) as { response?: string };
              if (json.response) send({ type: 'token', content: json.response });
            } catch {
              /* ignore keep-alive / non-JSON lines */
            }
          }
        }

        send({ type: 'done' });
      } catch (err) {
        console.error('[/api/chat] error:', err);
        send({ type: 'error', message: String((err as Error)?.message ?? err) });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
};
