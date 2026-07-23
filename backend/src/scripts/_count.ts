import { getCollection } from "../db/chroma.js";

const BASE = "http://localhost:5173";
const PATHS = ["/", "/experience", "/about", "/skills"];

const c = await getCollection();
console.log("TOTAL COUNT:", await c.count());
for (const p of PATHS) {
    const url = new URL(p, BASE).toString();
    const res = await c.get({ where: { url } });
    console.log(`  ${url} -> ${res.ids.length} chunks`);
}
