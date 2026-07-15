import { cards } from '@/components/data';
import Button from '@/components/ui/Button';
import useDragScroll from '@/hooks/useDragScroll';
import ResultCard from '@/components/ui/ResultCard';
import { resultsContent } from './resultsContent';

/**
 * Tablet + desktop layout (>=768px): horizontal, drag-scrollable, snapping
 * carousel. Tablet vs desktop differences are purely sizing/typography and are
 * handled with Tailwind (xl / 2xl), not separate component trees.
 */
function CarouselResults() {
  const { scrollRef, onPointerDown, onPointerMove, onPointerUp } =
    useDragScroll();

  return (
    <div className="flex w-full flex-col gap-8 px-8 py-16 xl:gap-10 xl:px-10 2xl:gap-16 2xl:py-24 2xl:px-16">
      <header className="flex flex-col items-center gap-4 text-center 2xl:gap-6">
        <h2 className="font-unitea text-text-primary text-5xl font-bold 2xl:text-8xl 2xl:leading-none">
          {resultsContent.heading}
        </h2>
        <p className="font-goorm text-text-gray max-w-xl leading-tight xl:text-xl 2xl:max-w-3xl 2xl:text-2xl">
          {resultsContent.description}
        </p>
      </header>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex snap-x snap-mandatory cursor-grab select-none gap-5 overflow-x-auto scrollbar-hide 2xl:gap-8"
      >
        {cards.map(({ title, text }) => (
          <ResultCard
            key={title}
            title={title}
            text={text}
            className="aspect-square w-1/3 shrink-0 snap-start xl:w-1/4"
          />
        ))}
      </div>

      <div className="flex justify-center">
         <a
              href="https://www.linkedin.com/in/margarita-kattsyna/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button variant="secondary" rounded>
              {resultsContent.cta}
            </Button>
        </a>
        
      </div>
    </div>
  );
}

export default CarouselResults;
