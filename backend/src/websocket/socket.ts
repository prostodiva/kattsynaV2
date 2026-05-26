import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";
import type { ServerMessage, ClientMessage } from "../types/message.js";
import { runRAG } from "../../src/services/rag.service.js";

export function createWebSocketServer(server: Server) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", (socket: WebSocket) => {
        console.log("client connected");

        socket.on("message", async (rawMessage) => {
            try {
                const message = JSON.parse(
                    rawMessage.toString()
                ) as ClientMessage;

                if (message.type === "ping") {
                    socket.send(
                        JSON.stringify({ type: "pong" } as ServerMessage)
                    );
                    return;
                }

                if (message.type === "message") {
                    await runRAG(
                        message.content,

                        // onToken
                        (token) => {
                            socket.send(JSON.stringify({
                                type: "stream",
                                content: token,
                            }));
                        },

                        // onEnd
                        () => {
                            socket.send(JSON.stringify({
                                type: "stream_end",
                            }));
                        },

                        // onError
                        (err) => {
                            socket.send(JSON.stringify({
                                type: "error",
                                message: "RAG failed",
                            }));
                        }
                    );
                }

            } catch (error) {
                socket.send(
                    JSON.stringify({
                        type: "error",
                        message: "Invalid websocket message",
                    } as ServerMessage)
                );
            }
        });

        socket.on("close", () => {
            console.log("Client disconnected");
        });
    });

    return wss;
}