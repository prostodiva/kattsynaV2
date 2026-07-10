import { cards } from "@/components/data";
import card from '@/assets/card.webp';
import Button from "@/components/ui/Button";
import useDragScroll from "@/hooks/useDragScroll";

function ResultSectionContent() {
  const { scrollRef, onPointerDown, onPointerMove, onPointerUp } = useDragScroll();

  return (
    <div className="flex-col justify-center p-5">
      <h1 className="text-center">
        <span className="font-unitea font-bold block text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl 2xl:leading-none">
          Engineering That Drives Results
        </span>
      </h1>

      <div className="flex justify-center">
        <p className="relative font-goorm text-text-gray 2xl:text-xl max-w-sm md:max-w-sm xl:max-w-md leading-tight p-4">
              I focus on solving business problems, not just
              writing syntax. Here is how my full-stack
              expertise protects your product from technical
              debt, server crashes, and poor user retention.
            </p>
      </div>
      

      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-5 cursor-grab select-none"
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}>
        {cards.map(({ title, text }) => (
        <div key={title} className="snap-start shrink-0 w-1/2 md:w-1/3 xl:w-1/4 relative flex flex-col justify-between p-5 min-h-64">
            <img
              src={card}
              alt="Card Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <p className="relative font-goorm text-text-secondary 2xl:text-2xl 2xl:leading-tight">
              {text}
            </p>
            <h3 className="relative font-stack font-bold text-xl 2xl:text-3xl mt-8">
              {title}
            </h3>
          </div>
        ))}

        <div className="md:col-start-2 xl:col-start-3 flex items-center md:items-end xl:items-center justify-center mt-5">
          <Button variant="secondary" rounded className="w-full">
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultSectionContent;