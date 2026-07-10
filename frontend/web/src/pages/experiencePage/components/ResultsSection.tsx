import Section from '@/components/Section.tsx';
import useMediaQuery from '@/hooks/useMediaQuery';
import CarouselResults from './results/CarouselResults';
import MobileResults from './results/MobileResults';

/**
 * Chooses the layout at the one place where behavior actually diverges:
 * mobile (vertical, no drag) vs the drag-scroll carousel (tablet + desktop).
 * Tablet/desktop sizing differences live inside CarouselResults via Tailwind.
 */
function ResultsSection() {
  const isCarousel = useMediaQuery('(min-width: 768px)');

  return (
    <Section className="bg-surface-section">
      {isCarousel ? <CarouselResults /> : <MobileResults />}
    </Section>
  );
}

export default ResultsSection;
