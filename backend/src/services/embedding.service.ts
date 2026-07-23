/*
 * Embeddings for local ingestion, via Cloudflare Workers AI REST.
 * Uses the SAME model as the runtime Pages Function so stored vectors and
 * query vectors live in the same space (bge-base-en-v1.5, 768-dim).
 *
 * Requires CF_ACCOUNT_ID and CF_API_TOKEN (see backend/.env.example).
 */

const ACCOUNT_ID =
    process.env.CLOUDFLARE_ACCOUNT_ID ?? process.env.CF_ACCOUNT_ID;
const API_TOKEN =
    process.env.CLOUDFLARE_API_TOKEN ?? process.env.CF_API_TOKEN;
const MODEL = "@cf/baai/bge-base-en-v1.5";

export async function embedText(text: string): Promise<number[]> {
    if (!ACCOUNT_ID || !API_TOKEN) {
        throw new Error(
            "CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN must be set to run ingestion."
        );
    }

    const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: [text] }),
        }
    );

    if (!res.ok) {
        throw new Error(
            `Workers AI embed failed: ${res.status} ${await res.text()}`
        );
    }

    const json = (await res.json()) as { result: { data: number[][] } };
    const vector = json.result?.data?.[0];

    if (!vector) {
        throw new Error("Workers AI embed returned no vector");
    }

    return vector;
}
