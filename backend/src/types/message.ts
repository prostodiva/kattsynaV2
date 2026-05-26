export type ClientMessage =
    | {
    type: "message";
    content: string;
}
    | {
    type: "ping";
};

export type ServerMessage =
    | {
    type: "stream";
    content: string;
}
    | {
    type: "stream_end";
}
    | {
    type: "error";
    message: string;
}
    | {
    type: "pong";
};