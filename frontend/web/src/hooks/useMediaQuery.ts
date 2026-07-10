import { useEffect, useState } from 'react';

/**
 * Subscribes to a CSS media query and re-renders when it changes.
 * Use ONLY when React rendering behavior must change (different component
 * trees / interaction models). For styling-only responsiveness, use Tailwind.
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
