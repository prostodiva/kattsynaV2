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

const server = http.createServer(app);
createWebSocketServer(server);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
