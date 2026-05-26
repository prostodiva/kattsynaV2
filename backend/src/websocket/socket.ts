import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";
import { buildPrompt } from "../rag/prompt.js";
import { retrieveContext } from "../rag/retriever.js";
import { streamLLMResponse } from "../services/llm.service.js";

export function createWebSocketServer(server: Server) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", (socket: WebSocket) => {
        console.log("client connected");

        let isStreaming = false;

        socket.on("message", async (rawMessage) => {
            const message = JSON.parse(rawMessage.toString());

            if (message.type !== "message") return;

            if (isStreaming) {
                socket.send(JSON.stringify({
                    type: "error",
                    message: "Already processing request",
                }));
                return;
            }

            isStreaming = true;

            try {
                // 1. retrieve context
                const chunks = await retrieveContext(message.content);

                // 2. build prompt
                const prompt = buildPrompt(message.content, chunks);

                console.log("CHUNKS:", chunks);
                console.log("PROMPT:", prompt);

                // 3. stream to LLM
                await streamLLMResponse(
                    prompt,
                    (token) => {
                        const cleanToken =
                            typeof token === "string"
                                ? token.replace(/\s+/g, " ")
                                : "";

                        if (cleanToken.length > 0) {
                            socket.send(JSON.stringify({
                                type: "stream",
                                content: cleanToken,
                            }));
                        }
                    },
                    () => {
                        isStreaming = false;

                        socket.send(JSON.stringify({
                            type: "stream_end",
                        }));
                    },
                    (err) => {
                        isStreaming = false;

                        socket.send(JSON.stringify({
                            type: "error",
                            message: "LLM failed",
                        }));
                    }
                );
            } catch (err) {
                isStreaming = false;

                socket.send(JSON.stringify({
                    type: "error",
                    message: "Server error",
                }));
            }
        });

        socket.on("close", () => {
            console.log("Client disconnected");
        });
    });

    return wss;
}