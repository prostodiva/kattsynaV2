import { getCardStyle } from '@/components/ui/getCardStyle';
import ProjectCard from "@/components/ui/ProjectCard";
import { useEffect, useRef, useState } from 'react';
import { projects } from "../../../components/data";
import useDragScroll from "@/hooks/useDragScroll";

const CLONES = 1;
const looped = [...projects, ...projects, ...projects];
const offset = projects.length * CLONES;

function Projects() {
  const { scrollRef, onPointerDown, onPointerMove, onPointerUp } = useDragScroll();
  const [activeIndex, setActiveIndex] = useState(offset);
  const initialized = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || initialized.current) return;
    initialized.current = true;
    const cards = Array.from(el.children) as HTMLElement[];
    el.scrollLeft = cards[offset].offsetLeft - (el.clientWidth - cards[offset].clientWidth) / 2;
  }, []);

  const handleScrollEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const cards = Array.from(el.children) as HTMLElement[];

    let idx = cards.findIndex(({ offsetLeft, clientWidth }) =>
      center >= offsetLeft && center <= offsetLeft + clientWidth
    );
    if (idx === -1) idx = offset;

    if (idx < offset) {
      idx += projects.length;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = cards[idx].offsetLeft - (el.clientWidth - cards[idx].clientWidth) / 2;
      el.style.scrollBehavior = '';
    } else if (idx >= offset + projects.length) {
      idx -= projects.length;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = cards[idx].offsetLeft - (el.clientWidth - cards[idx].clientWidth) / 2;
      el.style.scrollBehavior = '';
    }

    setActiveIndex(idx);
  };

  return (
    <div className="w-full overflow-hidden" style={{ perspective: '1200px' }}>
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScrollEnd={handleScrollEnd}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 cursor-grab select-none"
      >
        {looped.map((p, i) => (
          <div
            key={`${p.title}-${i}`}
            className="snap-center shrink-0 w-[85vw] md:w-[70vw] xl:w-[50%] transition-all duration-300"
            style={{
              ...getCardStyle(i - activeIndex),
              pointerEvents: 'none',
            }}
          >
            <ProjectCard {...p} isActive={i === activeIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;