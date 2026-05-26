/*
*
* fetch page text
* chunk text
* generate embeddings
* store in Chroma
*
*/

import { semanticChunkText } from "../ingestion/chunker.js";
import { embedText } from "../services/embedding.service.js";
import { getCollection } from "../db/chroma.js";
import { fetchPageText } from "./fetchPage.js";

export async function indexPage(url: string) {
    const collection = await getCollection();
    const rawText = await fetchPageText(url);

    console.log("RAW TEXT LENGTH:", rawText.length);

    const chunks = await semanticChunkText(rawText);

    console.log("CHUNKS COUNT:", chunks.length);
    console.log("FIRST CHUNK SAMPLE:", chunks[0]);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        if (!chunk) continue;
        if (chunk.length < 30) continue;

        const embedding = await embedText(chunk);

        await collection.add({
            ids: [`${url}-chunk-${i}`],
            documents: [chunk],
            embeddings: [embedding],
            metadatas: [
                {
                    url,
                    chunkIndex: i,
                },
            ],
        });
    }

    console.log("INDEXING COMPLETE");
}