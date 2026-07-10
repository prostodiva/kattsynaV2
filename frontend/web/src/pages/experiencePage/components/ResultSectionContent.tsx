import { cards } from "@/components/data";
import card from '@/assets/card.webp';
import Button from "@/components/ui/Button";
import useDragScroll from "@/hooks/useDragScroll";

function ResultSectionContent() {
  const { scrollRef, onPointerDown, onPointerMove, onPointerUp } = useDragScroll();

  return (
    <div className="flex-col justify-center p-10">
      <h1 className="text-center">
        <span className="font-unitea font-bold block text-3xl md:text-5xl xl:text-5xl 2xl:text-8xl 2xl:leading-none">
          Engineering That Drives Results
        </span>
      </h1>

      <div className="flex justify-center">
        <p className="relative font-goorm text-text-gray 2xl:text-2xl max-w-sm md:max-w-sm xl:max-w-xl leading-tight p-4">
              I focus on solving business problems, not just
              writing syntax. Here is how my full-stack
              expertise protects your product from technical
              debt, server crashes, and poor user retention.
            </p>
      </div>
      

      <div className="flex flex-col md:flex-row sm:overflow-x-auto md:scrollbar-hide md:snap-x md:snap-mandatory gap-5 md:cursor-grab md:select-none"
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}>
        {cards.map(({ title, text }) => (
          <div key={title} className="md:snap-start md:shrink-0 w-full sm:w-1/2 md:w-1/4 relative flex flex-col justify-between xl:min-h-140">
            <img
              src={card}
              alt="Card Image"
              className="absolute inset-0 w-full h-full object-cover xl:object-contain"
            />
            <p className="relative font-goorm text-text-secondary 2xl:text-2xl 2xl:leading-tight pt-5 pr-2 pl-2 sm:pt-20 xl:pt-60 xl:pl-5 xl:pr-5 2xl:pt-80 2xl:pl-15 2xl:pr-15">
              {text}
            </p>
            <h3 className="relative font-stack font-bold text-xl 2xl:text-3xl mt-8 pl-2 xl:-translate-y-30 xl:pl-5 2xl:-translate-y-5 2xl:pl-15 pb-4">
              {title}
            </h3>
          </div>
        ))}
      </div>

      <div className="md:col-start-2 xl:col-start-3 flex items-center md:items-end xl:items-center justify-center mt-5 md:mt-10 2xl:mt-15">
        <Button variant="secondary" rounded className="w-full md:w-1/6">
          Hire Me
        </Button>
      </div>
    </div>
  );
}

export default ResultSectionContent;