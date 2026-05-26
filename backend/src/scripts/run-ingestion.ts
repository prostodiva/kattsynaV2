import { indexPage } from "../ingestion/indexer.js";

async function run() {
    await indexPage("http://localhost:5173/");
    console.log("DONE INGESTION");
}

run();