import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  ChatMessage,
  ConnectionStatus,
  WsMessage,
} from '../types/chat.ts';

const WS_URL = import.meta.env.VITE_WS_URL ?? 'ws://localhost:3001';

const MAX_MESSAGE_LENGTH = 2000;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [status, setStatus] = useState<ConnectionStatus>('connecting');

  const [isResponding, setIsResponding] = useState(false);

  const socketRef = useRef<WebSocket | null>(null);

  const streamingMessageIdRef = useRef<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    socketRef.current = ws;

    ws.onopen = () => {
      setStatus('open');
    };

    ws.onerror = () => {
      setStatus('error');
    };

    ws.onclose = () => {
      setStatus('closed');
    };

    ws.onmessage = ({ data }) => {
      let message: WsMessage;

      try {
        message = JSON.parse(data);
      } catch {
        return;
      }

      if (message.type === 'stream') {
        if (!streamingMessageIdRef.current) {
          const id = crypto.randomUUID();

          streamingMessageIdRef.current = id;

          setMessages((prev) => [
            ...prev,
            {
              id,
              role: 'assistant',
              content: '',
            },
          ]);
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === streamingMessageIdRef.current
              ? {
                  ...msg,
                  content: msg.content + (message.content ?? ''),
                }
              : msg
          )
        );

        setIsResponding(true);
        return;
      }

      if (message.type === 'stream_end') {
        if (streamingMessageIdRef.current) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === streamingMessageIdRef.current
                ? {
                    ...msg,
                    sources: message.sources,
                  }
                : msg
            )
          );
        }

        streamingMessageIdRef.current = null;
        setIsResponding(false);
        return;
      }

      if (message.type === 'message') {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: message.content ?? '',
            sources: message.sources,
          },
        ]);

        setIsResponding(false);
        return;
      }

      if (message.type === 'error') {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'error',
            content: 'Something went wrong. Please try again.',
          },
        ]);

        setIsResponding(false);
      }
    };

    return () => ws.close();
  }, []);

  const sendMessage = useCallback((content: string) => {
    const ws = socketRef.current;

    if (!ws || ws.readyState !== WebSocket.OPEN) {
      return false;
    }

    const text = content.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (!text) {
      return false;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: 'user',
        content: text,
      },
    ]);

    setIsResponding(true);

    ws.send(
      JSON.stringify({
        type: 'message',
        content: text,
      })
    );

    return true;
  }, []);

  const clearHistory = () => {
    setMessages([]);
  };

  return {
    messages,
    status,
    isResponding,
    sendMessage,
    clearHistory,
  };
}
