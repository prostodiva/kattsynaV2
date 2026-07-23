/*
 *
 * fetch page text -> semantic chunk -> embed (Workers AI) -> Vectorize records
 *
 * Returns records instead of writing to a DB. run-ingestion.ts collects them
 * and writes an NDJSON that is loaded with `wrangler vectorize insert`.
 *
 */

import { semanticChunkText } from "../ingestion/chunker.js";
import { embedText } from "../services/embedding.service.js";
import { fetchPageText } from "./fetchPage.js";

export interface VectorRecord {
    id: string;
    values: number[];
    metadata: {
        url: string;
        text: string;
        chunkIndex: number;
    };
}

export async function indexPage(url: string): Promise<VectorRecord[]> {
    const rawText = await fetchPageText(url);

    console.log("RAW TEXT LENGTH:", rawText.length);

    const chunks = await semanticChunkText(rawText);

    console.log("CHUNKS COUNT:", chunks.length);

    const records: VectorRecord[] = [];

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        if (!chunk) continue;
        if (chunk.length < 30) continue;

        const values = await embedText(chunk);

        records.push({
            id: `${url}-chunk-${i}`,
            values,
            metadata: {
                url,
                text: chunk,
                chunkIndex: i,
            },
        });
    }

    console.log(`INDEXED ${records.length} chunks: ${url}`);

    return records;
}
