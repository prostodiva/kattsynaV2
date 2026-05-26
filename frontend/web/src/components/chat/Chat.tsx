import { useChat } from "../../hooks/useChat.ts";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages.tsx";
import { ChatInput } from "./ChatInput";

export function Chat() {
    const {
        messages,
        status,
        isResponding,
        sendMessage,
    } = useChat();

    return (
        <div className="flex h-80 w-100 flex-col rounded-md bg-surface-dark-card">
            <ChatHeader/>

            <ChatMessages
                messages={messages}
                isResponding={isResponding}
            />

            <ChatInput
                disabled={ status !== "open" || isResponding }
                onSend={sendMessage}
            />
        </div>
    );
}