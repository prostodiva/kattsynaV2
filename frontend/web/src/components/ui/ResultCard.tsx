import card from '@/assets/card.webp';

export interface ResultCardProps {
  title: string;
  text: string;
  /** Outer sizing / aspect / grid-placement / snap classes from the owner. */
  className?: string;
  /** Inner padding override; defaults to the standard card padding. */
  contentClassName?: string;
}

/**
 * Shared "competency" card used by the experience Results carousel and the
 * home Expertise grid. The art is a rounded panel used as a backdrop; content
 * flows on top with flexbox (justify-between) so the copy sits toward the top
 * and the title anchors to the bottom — no pixel pushing. The owning layout
 * supplies the outer box size (aspect-square, grid cell, etc.) via `className`.
 */
function ResultCard({ title, text, className, contentClassName }: ResultCardProps) {
  return (
    <div className={`relative ${className ?? ''}`}>
      <img
        src={card}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className={`relative flex h-full flex-col justify-between ${
          contentClassName ?? 'p-5 xl:p-6 2xl:p-8'
        }`}
      >
        <p className="font-goorm text-text-secondary text-sm leading-tight xl:text-base 2xl:text-2xl 2xl:leading-tight">
          {text}
        </p>
        <h3 className="font-stack text-text-primary text-lg font-bold xl:text-xl 2xl:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default ResultCard;
