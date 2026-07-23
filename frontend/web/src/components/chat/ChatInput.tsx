import { useCallback, useState, type KeyboardEvent } from 'react';
import Button from '@/components/ui/Button.tsx';

interface Props {
  disabled: boolean;
  onSend: (message: string) => boolean;
}

export function ChatInput({ disabled, onSend }: Props) {
  const [input, setInput] = useState('');

  const handleSend = useCallback(() => {
    if (onSend(input)) {
      setInput('');
    }
  }, [input, onSend]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <textarea
          value={input}
          disabled={disabled}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Ask a question"
          placeholder="Ask a question..."
          className="flex-1 resize-none rounded-lg bg-surface-section p-3 focus:outline-none focus:ring-0 focus:border-brand-focus"
        />

        <Button
          variant="secondary"
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          rounded
        >
          Send
        </Button>
      </div>
    </div>
  );
}
