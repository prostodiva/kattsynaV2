"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatTest() {
    const socketRef = useRef<WebSocket | null>(null);
    const [input, setInput] = useState("");

    useEffect(() => {
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

        return () => {
            socket.close();
        };
    }, []);

    function sendMessage() {
        if (!input.trim()) return;

        socketRef.current?.send(
            JSON.stringify({
                type: "message",
                content: input,
            })
        );

        setInput(""); // optional: clear after send
    }

    return (
        <div className="space-y-2">
            <input
                type="text"
                className="text-black border px-2 py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
            />

            <button
                onClick={sendMessage}
                className="px-3 py-1 bg-blue-500 text-white"
            >
                Send Message
            </button>
        </div>
    );
}