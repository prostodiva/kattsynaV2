/*
* Creates Chroma client; returns collection
* */

import { ChromaClient } from "chromadb";

export const chroma = new ChromaClient({
    host: "localhost",
    port: 8000,
});

export async function getCollection() {
    return await chroma.getOrCreateCollection({
        name: "portfolio_content",
        metadata: {
            "hnsw:space": "cosine",
        },
        embeddingFunction: null,
    });
}