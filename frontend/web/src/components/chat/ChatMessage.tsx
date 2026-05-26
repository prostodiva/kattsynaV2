import type { ChatMessage as Message } from "../../types/chat.ts";

interface Props {
    message: Message;
}

export function ChatMessage({
                                message,
                            }: Props) {
    const isUser =
        message.role === "user";

    const isError =
        message.role === "error";

    return (
        <div
            className={`flex ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >
            <div
                className={[
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap",
                    isUser
                        ? "bg-surface-header text-text-secondary"
                        : isError
                            ? "bg-red-900"
                            : "bg-zinc-800 text-zinc-100",
                ].join(" ")}
            >
                {message.content}

                {message.sources?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {message.sources.map((source) => (
                            <a
                                key={source.url}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs underline"
                            >
                                {source.title}
                            </a>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}