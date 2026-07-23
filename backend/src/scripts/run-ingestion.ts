import { indexPage } from "../ingestion/indexer.js";

const BASE_URL = process.env.INGEST_BASE_URL ?? "http://localhost:5173";
const PATHS = ["/", "/experience", "/about", "/skills"];

async function run() {
    for (const path of PATHS) {
        const url = new URL(path, BASE_URL).toString();
        try {
            console.log(`\n=== INGESTING ${url} ===`);
            await indexPage(url);
        } catch (err) {
            console.error(`FAILED ${url}:`, err);
        }
    }
    console.log("DONE INGESTION");
}

run();
