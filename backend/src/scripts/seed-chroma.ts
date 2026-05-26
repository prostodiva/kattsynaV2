import { getCollection } from "../db/chroma.js";
import { embedText } from "../services/embedding.service.js";

async function seed() {
    const collection = await getCollection();

    const chunks = [
        "I build AI agents using Node.js and LangChain.",
        "My portfolio includes projects on RAG systems and WebSocket streaming.",
        "I specialize in backend architecture, TypeScript, and AI systems design.",
        "I use Ollama for local LLM inference and ChromaDB for vector search.",
    ];

    for (let i = 0; i < chunks.length; i++) {
        const text = chunks[i];
        if (!text) continue;
        const vector = await embedText(text);

        await collection.add({
            ids: [`chunk-${i}`],
            documents: [text],
            embeddings: [vector],
            metadatas: [
                {
                    source: "manual-seed",
                },
            ],
        });

        console.log("Inserted:", text);
    }

    console.log("DONE SEEDING");
}

seed();