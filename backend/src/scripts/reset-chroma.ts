import {chroma, getCollection} from "../db/chroma.js";

async function reset() {
    const collection = await getCollection();

    try {
        await chroma.deleteCollection({
            name: "portfolio_content",
        });
        console.log("Chroma collection cleared");
    } catch (err) {
        console.log("Could not delete collection:", err);
    }
}

reset();