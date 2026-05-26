import { getCollection } from "../db/chroma.js";
import { embedText } from "../services/embedding.service.js";

export async function retrieveSimilarChunks(query: string) {
    const collection = await getCollection();

    const queryVector = await embedText(query);

    const result = await collection.query({
        queryEmbeddings: [queryVector],
        nResults: 3,
    });

    const chunks = result.documents?.[0] || [];

    console.log("\n RETRIEVED CHUNKS:");
    chunks.forEach((c, i) => {
        if (!c) return;

        console.log(`${i + 1}. ${c}`);
    });

    return chunks;
}