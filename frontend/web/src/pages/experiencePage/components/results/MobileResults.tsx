import { cards } from '@/components/data';
import Button from '@/components/ui/Button';
import ResultCard from '@/components/ui/ResultCard';
import { resultsContent } from './resultsContent';

/**
 * Mobile layout (<768px): vertical stack, normal page scrolling.
 * No carousel, no drag behavior.
 */
function MobileResults() {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-5 py-12">
      <header className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-unitea text-text-primary text-3xl font-bold">
          {resultsContent.heading}
        </h2>
        <p className="font-goorm text-text-gray max-w-sm leading-tight">
          {resultsContent.description}
        </p>
      </header>

      <div className="flex w-full flex-col gap-6">
        {cards.map(({ title, text }) => (
          <ResultCard
            key={title}
            title={title}
            text={text}
            className="aspect-square w-full max-w-sm self-center"
          />
        ))}
      </div>

      <Button variant="secondary" rounded className="w-full max-w-sm">
        {resultsContent.cta}
      </Button>
    </div>
  );
}

export default MobileResults;
