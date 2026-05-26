import { Server } from "http";
import { WebSocket, WebSocketServer } from 'ws';
import type { ServerMessage, ClientMessage } from "../types/message.js";

export function createWebSocketServer(server: Server) {
    const wss = new WebSocketServer({ server });
    wss.on("connection", (socket: WebSocket) => {
        console.log("client connected");

        socket.on("message", (rawMessage) => {
            try {
                const message = JSON.parse(
                    rawMessage.toString()
                ) as ClientMessage;

                if (message.type === "ping") {
                    const response: ServerMessage = {
                        type: "pong"
                    };

                    socket.send(JSON.stringify(response));
                    return;
                }


                if (message.type === "message") {
                    const response: ServerMessage = {
                        type: "stream",
                        content: `Echo: ${message.content}`,
                    };

                    socket.send(JSON.stringify(response));
                    const endMessage: ServerMessage = {
                        type: "stream_end",
                    };

                    socket.send(JSON.stringify(endMessage));
                }

            } catch (error) {
                const errorMessage: ServerMessage = {
                    type: "error",
                    message: "Invalid websocket message",
                };

                socket.send(JSON.stringify(errorMessage));
            }
        });

        socket.on("close", () => {
            console.log("Client disconnected");
        });
    });

    return wss;
}