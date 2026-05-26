import { getCollection } from "../db/chroma.js";

async function debug() {
    const collection = await getCollection();

    const result = await collection.get({
        include: ["documents", "embeddings", "metadatas"],
    });

    console.log("COUNT:", result.ids.length);
    console.log("IDS:", result.ids);
    console.log("DOCS:", result.documents);
    console.log("METADATA:", result.metadatas);
}

debug();