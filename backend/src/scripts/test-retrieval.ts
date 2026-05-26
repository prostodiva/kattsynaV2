import { retrieveContext } from "../rag/retriever.js";

async function test() {
    const chunks = await retrieveContext("AI systems TypeScript");

    console.log("RETRIEVED CHUNKS:");
    chunks.forEach((c, i) => {
        console.log(`${i + 1}. ${c}`);
    });
}

test();