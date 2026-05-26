export type ConnectionStatus =
    | "connecting"
    | "open"
    | "closed"
    | "error";

export interface Source {
    url: string;
    title: string;
}

export interface ChatMessage {
    id: string;
    role: "user" | "assistant" | "error";
    content: string;
    sources?: Source[];
}

export interface WsMessage {
    type: "message" | "stream" | "stream_end" | "error";
    content?: string;
    sources?: Source[];
}