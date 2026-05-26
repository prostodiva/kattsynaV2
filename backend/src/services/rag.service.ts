import { embedText } from "../services/embedding.service.js";
import { retrieveSimilarChunks } from "../services/retrieval.service.js";
import { streamLLMResponse } from "../services/llm.service.js";

export async function runRAG(
    question: string,
    onToken: (token: string) => void,
    onEnd: () => void,
    onError: (err: any) => void
) {
    try {
        // 1. embed query (optional since retrieval already does it,
        // but we keep separation clean for MVP clarity)
        const queryVector = await embedText(question);

        // 2. retrieve context
        const chunks = await retrieveSimilarChunks(question);

        const context = chunks.join("\n");

        // 3. build prompt
        const prompt = `
You are a helpful portfolio assistant.

Use ONLY the context below to answer.

Context:
${context}

User question:
${question}

Answer clearly and concisely.
        `.trim();

        // 4. stream from LLM
        await streamLLMResponse(
            prompt,
            onToken,
            onEnd,
            onError
        );

    } catch (err) {
        console.error("RAG error:", err);
        onError(err);
    }
}