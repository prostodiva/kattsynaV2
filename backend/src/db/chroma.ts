import { ChromaClient } from "chromadb";

export const chroma = new ChromaClient();

export async function getCollection() {
    return await chroma.getOrCreateCollection({
        name: "portfolio_content",
        metadata: {
            "hnsw:space": "cosine",
            "embedding_mode": "external"
        }
    });
}
