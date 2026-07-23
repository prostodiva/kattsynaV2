import "dotenv/config";
import { writeFile } from "node:fs/promises";
import { indexPage, type VectorRecord } from "../ingestion/indexer.js";

const BASE_URL = process.env.INGEST_BASE_URL ?? "http://localhost:5173";
const PATHS = ["/", "/experience", "/about", "/skills"];
const OUT_FILE = "vectors.ndjson";
const INDEX_NAME = "portfolio";

async function run() {
    const all: VectorRecord[] = [];

    for (const path of PATHS) {
        const url = new URL(path, BASE_URL).toString();
        try {
            console.log(`\n=== INGESTING ${url} ===`);
            const records = await indexPage(url);
            all.push(...records);
        } catch (err) {
            console.error(`FAILED ${url}:`, err);
        }
    }

    const ndjson = all.map((r) => JSON.stringify(r)).join("\n") + "\n";
    await writeFile(OUT_FILE, ndjson);

    console.log(`\nWROTE ${all.length} vectors to ${OUT_FILE}`);
    console.log(
        `Next: npx wrangler vectorize insert ${INDEX_NAME} --file ${OUT_FILE}`
    );
    console.log("DONE INGESTION");
}

run();
