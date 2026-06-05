import type { BaseSectionProps } from '@/types/section.ts';

function Section({
  backgroundImage,
  style,
  className,
  children,
}: BaseSectionProps) {
  return (
    <section
      style={style}
      className={`relative min-h-screen lg:min-h-dvh
                  flex flex-col lg:flex-row
                  items-start lg:items-center
                  justify-start lg:justify-center
                  max-w-container mx-auto ${className || ''}`}
    >
      {backgroundImage && (
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source srcSet={backgroundImage.avifSrcSet} type="image/avif" />
          <source srcSet={backgroundImage.webpSrcSet} type="image/webp" />
          <img
            src={backgroundImage.fallbackSrc}
            alt={backgroundImage.alt ?? ''}
            className="w-full h-full object-cover"
          />
        </picture>
      )}

      {children}
    </section>
  );
}

export default Section;
