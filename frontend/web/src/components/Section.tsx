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
      className={`relative min-h-dvh flex items-center justify-center pt-16 max-w-container mx-auto ${className || ''}`}
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