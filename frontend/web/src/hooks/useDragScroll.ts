import { useRef } from 'react';

// Movement past this many pixels counts as a drag rather than a click.
const DRAG_THRESHOLD = 5;

function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  // A drag that ends over a card would otherwise fire a click on its link.
  const didDrag = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    // Touch/pen use the browser's native scroll (momentum + snap). Only take
    // over for mouse, where click-drag is the intended "grab" affordance.
    if (e.pointerType !== 'mouse') return;
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.scrollSnapType = 'none';
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > DRAG_THRESHOLD) didDrag.current = true;
    scrollRef.current!.scrollLeft = scrollStart.current - dx;
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

  const onClickCapture = (e: React.MouseEvent) => {
    if (!didDrag.current) return;
    didDrag.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return { scrollRef, onPointerDown, onPointerMove, onPointerUp, onClickCapture };
}

export default useDragScroll;