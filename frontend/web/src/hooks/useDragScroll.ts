import { useEffect, useRef } from 'react';

// Movement past this many pixels counts as a drag rather than a click.
const DRAG_THRESHOLD = 5;

function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // A drag that ends over a card would otherwise fire a click on its link.
  const didDrag = useRef(false);
  const endDrag = useRef<(() => void) | null>(null);

  useEffect(() => () => endDrag.current?.(), []);

  const onPointerDown = (e: React.PointerEvent) => {
    // Touch/pen use the browser's native scroll (momentum + snap). Only take
    // over for mouse, where click-drag is the intended "grab" affordance.
    if (e.pointerType !== 'mouse') return;
    const el = scrollRef.current;
    if (!el) return;

    const startX = e.clientX;
    const scrollStart = el.scrollLeft;
    didDrag.current = false;
    el.style.cursor = 'grabbing';
    el.style.scrollSnapType = 'none';

    // Deliberately no setPointerCapture here. Capturing retargets pointerup
    // (and the compat mouseup) to this container, so the browser resolves the
    // following click against the container instead of the card's <a> and the
    // link never opens. Window listeners keep the drag alive past the
    // container's edges without touching any event's target.
    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - startX;
      if (Math.abs(dx) > DRAG_THRESHOLD) didDrag.current = true;
      el.scrollLeft = scrollStart - dx;
    };

    const stop = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
      endDrag.current = null;
      el.style.cursor = 'grab';
      el.style.scrollSnapType = 'x mandatory';
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    endDrag.current = stop;
  };

  // Cards wrap their image in an <a>, and anchors are natively draggable: a
  // mouse drag would otherwise start a link drag-and-drop and kill the pointer
  // stream mid-gesture (setPointerCapture used to mask this for free).
  const onDragStart = (e: React.DragEvent) => e.preventDefault();

  const onClickCapture = (e: React.MouseEvent) => {
    if (!didDrag.current) return;
    didDrag.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return { scrollRef, onPointerDown, onDragStart, onClickCapture };
}

export default useDragScroll;
