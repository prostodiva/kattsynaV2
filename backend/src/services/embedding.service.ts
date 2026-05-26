import { OllamaEmbeddings } from "@langchain/ollama";

const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
});

export async function embedText(text: string) {
    try {
        const vector = await embeddings.embedQuery(text);

        console.log("EMBEDDING VECTOR LENGTH:", vector.length);
        console.log("VECTOR SAMPLE:", vector.slice(0, 10));

        return vector;
    } catch (err) {
        console.error("Embedding error:", err);
        throw err;
    }
}