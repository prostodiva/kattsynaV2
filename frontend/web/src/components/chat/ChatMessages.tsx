import type { ChatMessage as ChatMessageType } from "../../types/chat.ts";

import { ChatMessage } from "./ChatMessage";

interface Props {
    messages: ChatMessageType[];
    isResponding: boolean;
}

export function ChatMessages({ messages, isResponding }: Props) {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
                <div className="text-center text-zinc-500 text-sm">
                    Ask me about projects, experience,
                    or technologies.
                </div>
            ) : (
                messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                    />
                ))
            )}

            {isResponding && (
                <div className="text-sm text-zinc-500">
                    Thinking...
                </div>
            )}
        </div>
    );
}