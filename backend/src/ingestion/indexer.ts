import { chunkText } from "../ingestion/chunker.js";
import { embedText } from "../services/embedding.service.js";
import { getCollection } from "../db/chroma.js";
import { fetchPageText } from "./fetchPage.js";

export async function indexPage(url: string) {

    const collection = await getCollection();

    const rawText = await fetchPageText(url);

    console.log("RAW TEXT LENGTH:", rawText.length);

    const chunks = chunkText(rawText);

    console.log("CHUNKS:", chunks.length);

    for (let i = 0; i < chunks.length; i++) {

        const chunk = chunks[i];

        if (!chunk) return;
        const embedding = await embedText(chunk);

        await collection.add({

            ids: [`${url}-chunk-${i}`],

            documents: [chunk],

            embeddings: [embedding],

            metadatas: [{ url, chunkIndex: i }],

        });

    }

}