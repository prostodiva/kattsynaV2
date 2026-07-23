import { useRef } from 'react';

function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    // Touch/pen use the browser's native scroll (momentum + snap). Only take
    // over for mouse, where click-drag is the intended "grab" affordance.
    if (e.pointerType !== 'mouse') return;
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.scrollSnapType = 'none';
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    scrollRef.current!.scrollLeft = scrollStart.current - (e.clientX - startX.current);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    // Ignore touch/pen (never captured) so releasePointerCapture can't throw.
    if (!el || !isDragging.current) return;
    isDragging.current = false;
    el.style.cursor = 'grab';
    el.style.scrollSnapType = 'x mandatory';
    el.releasePointerCapture(e.pointerId);
  };

  return { scrollRef, onPointerDown, onPointerMove, onPointerUp };
}

export default useDragScroll;