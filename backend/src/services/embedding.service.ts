import { OllamaEmbeddings } from "@langchain/ollama";

const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
});

export async function embedText(text: string): Promise<number[]> {
    return embeddings.embedQuery(text);
}