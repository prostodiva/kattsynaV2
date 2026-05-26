import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import {createWebSocketServer} from "./websocket/socket.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
    res.json({ status: "ok" });
});

app.get("/test-page", (_, res) => {
    res.send(`
        <h1>Portfolio</h1>
        <p>I build AI agents with Node.js</p>
        <p>I use ChromaDB for vector search</p>
    `);

});

const server = http.createServer(app);
createWebSocketServer(server);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//indexPage("http://localhost:3001/test-page");