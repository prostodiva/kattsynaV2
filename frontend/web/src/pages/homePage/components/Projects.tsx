import { useRef, useState } from 'react';
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "./data";

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.scrollSnapType = 'none'; // disable snap while dragging
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = scrollStart.current - (e.clientX - startX.current);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = false;
    el.style.cursor = 'grab';
    el.style.scrollSnapType = 'x mandatory'; // re-enable snap on release
    el.releasePointerCapture(e.pointerId);
  };

  const handleScrollEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const cards = Array.from(el.children) as HTMLElement[];
    const index = cards.findIndex(({ offsetLeft, clientWidth }) =>
      center >= offsetLeft && center <= offsetLeft + clientWidth
    );
    setActiveIndex(index === -1 ? 0 : index);
  };

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onScrollEnd={handleScrollEnd}
      className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 cursor-grab select-none"
    >
      {projects.map((project, i) => (
        <div key={project.title} className="snap-center shrink-0 w-[85vw] md:w-[45vw] xl:w-[30vw]">
          <ProjectCard {...project} isActive={i === activeIndex} />
        </div>
      ))}
    </div>
  );
}

export default Projects;