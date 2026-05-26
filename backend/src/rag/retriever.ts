import { getCollection } from "../db/chroma.js";
import { embedText } from "../services/embedding.service.js";

export async function retrieveContext(query: string, k = 3) {
    const collection = await getCollection();

    // 1. embed query manually (IMPORTANT)
    const queryEmbedding = await embedText(query);

    // 2. search using embeddings (NOT queryTexts)
    const results = await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: k,
    });

    console.log("RAW CHROMA RESULT:", JSON.stringify(results, null, 2));

    const documents = results.documents?.[0] ?? [];

    return documents.filter((d): d is string => typeof d === "string");
}