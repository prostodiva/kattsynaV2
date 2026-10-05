import { Link } from 'react-router-dom';
import type { ChatMessage as Message } from '../../types/chat.ts';

interface Props {
  message: Message;
}

/**
 * Sources are always pages of this site. The indexed URLs are absolute and
 * carry the origin used at ingestion time (a *.pages.dev deployment), so keep
 * only the route: resolving it against the current origin is what makes the
 * link land on the page the visitor is already browsing, in-app rather than as
 * a full reload on another host. Anything that isn't a route stays external.
 */
function toRoute(url: string): string | null {
  if (url.startsWith('/')) return url;
  try {
    return new URL(url).pathname;
  } catch {
    return null;
  }
}

export function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';

  const isError = message.role === 'error';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap',
          isUser
            ? 'bg-surface-header text-text-secondary'
            : isError
              ? 'bg-red-900'
              : 'bg-zinc-800 text-zinc-100',
        ].join(' ')}
      >
        {message.content}

        {message.sources?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.sources.map((source) => {
              const route = toRoute(source.url);

              return route ? (
                <Link key={source.url} to={route} className="text-xs underline">
                  {source.title}
                </Link>
              ) : (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline"
                >
                  {source.title}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
