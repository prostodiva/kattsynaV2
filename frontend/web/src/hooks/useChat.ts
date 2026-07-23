import { useCallback, useRef, useState } from 'react';
import type { ChatMessage, ConnectionStatus, Source } from '../types/chat.ts';

const API_URL = '/api/chat';
const MAX_MESSAGE_LENGTH = 2000;

interface StreamEvent {
  type: 'sources' | 'token' | 'done' | 'error';
  content?: string;
  sources?: Source[];
  message?: string;
}

/**
 * Request-based RAG chat client. POSTs to the same-origin Pages Function
 * (functions/api/chat.ts) and consumes its SSE stream. Public shape is kept
 * identical to the previous WebSocket implementation so the Chat UI is unchanged.
 */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isResponding, setIsResponding] = useState(false);
  const respondingRef = useRef(false);

  // No persistent connection anymore; each send is a standalone request.
  const status: ConnectionStatus = 'open';

  const streamResponse = useCallback(async (text: string) => {
    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: 'assistant', content: '' },
    ]);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let errored = false;

      const apply = (event: StreamEvent) => {
        if (event.type === 'token') {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: m.content + (event.content ?? '') }
                : m
            )
          );
        } else if (event.type === 'sources') {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, sources: event.sources } : m
            )
          );
        } else if (event.type === 'error') {
          errored = true;
          if (event.message) console.error('[chat] server error:', event.message);
        }
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split('\n\n');
        buffer = parts.pop() ?? '';
        for (const part of parts) {
          const line = part.split('\n').find((l) => l.startsWith('data:'));
          if (!line) continue;
          try {
            apply(JSON.parse(line.slice(5).trim()) as StreamEvent);
          } catch {
            /* ignore malformed events */
          }
        }
      }

      if (errored) throw new Error('stream error');
    } catch (err) {
      console.error('[chat] request failed:', err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId && !m.content
            ? {
                ...m,
                role: 'error',
                content: 'Something went wrong. Please try again.',
              }
            : m
        )
      );
    } finally {
      respondingRef.current = false;
      setIsResponding(false);
    }
  }, []);

  const sendMessage = useCallback(
    (content: string) => {
      if (respondingRef.current) return false;

      const text = content.trim().slice(0, MAX_MESSAGE_LENGTH);
      if (!text) return false;

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'user', content: text },
      ]);

      respondingRef.current = true;
      setIsResponding(true);
      void streamResponse(text);

      return true;
    },
    [streamResponse]
  );

  const clearHistory = () => setMessages([]);

  return { messages, status, isResponding, sendMessage, clearHistory };
}
