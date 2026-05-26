"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatTest() {
    const socketRef = useRef<WebSocket | null>(null);
    const [input, setInput] = useState("");

    useEffect(() => {
        // prevent double connection in React StrictMode
        if (socketRef.current?.readyState === WebSocket.OPEN) return;

        const socket = new WebSocket("ws://localhost:3001");
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("Connected to backend");
        };

        socket.onmessage = (event) => {
            console.log("Received:", event.data);
        };

        socket.onclose = () => {
            console.log("Disconnected");
        };

        socket.onerror = (err) => {
            console.log("Socket error", err);
        };

        return () => {
            // IMPORTANT: only close if actually open
            if (socket.readyState === WebSocket.OPEN) {
                socket.close();
            }
        };
    }, []);

    function sendMessage() {
        const socket = socketRef.current;

        if (!socket || socket.readyState !== WebSocket.OPEN) {
            console.warn("Socket not ready:", socket?.readyState);
            return;
        }

        socket.send(JSON.stringify({
            type: "message",
            content: input,
        }));
    }

    return (
        <div className="space-y-2">
            <input
                className="text-black border px-2 py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
}