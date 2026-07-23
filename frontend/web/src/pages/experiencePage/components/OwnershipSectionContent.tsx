import own from '@/assets/bg/ownership.webp';

const gradientHeading =
  'font-unitea font-bold leading-none bg-gradient-to-b from-[var(--color-gradient-text-from)] via-[var(--color-gradient-text-via)] to-transparent bg-clip-text text-transparent';

function OwnershipSectionContent() {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet={own} />
          <img src={own} alt="" className="w-full h-full object-cover" />
        </picture>

        <div className="relative z-10 flex flex-col min-h-screen lg:min-h-dvh px-5 md:px-8 py-2 xl:py-20">
          {/* Big gradient headings anchored to the top corners */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <h2
              className={`${gradientHeading} text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl`}
            >
              AI-Empowered
            </h2>
            <h2
              className={`${gradientHeading} text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl`}
            >
              Ownership
            </h2>
          </div>

          <div className="grow flex flex-col justify-start lg:justify-between items-start gap-44 md:gap-90 max-w-xs mx-auto">
            <div className="flex flex-col gap-4">
              <h3 className="font-stack font-bold text-text-primary text-xl md:text-2xl 2xl:text-3xl leading-snug">
                More Than Code:
                <br />
                End-to-End Reliability
              </h3>
              <p className="font-goorm text-text-secondary text-sm md:text-base 2xl:text-xl leading-tight">
                In a landscape where AI is changing how we write code, the true
                value of an engineer is rapid adaptability and end-to-end
                product ownership. I don't just use AI to accelerate my
                workflow; I build with it.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-stack font-bold text-text-primary text-xl md:text-2xl 2xl:text-3xl leading-snug">
                Don't Just Keep Up
                <br />
                Lead the Market
              </h3>
              <p className="font-goorm text-text-secondary text-sm md:text-base 2xl:text-xl leading-tight">
                I have hands-on experience engineering autonomous AI assistants
                using <strong className="font-bold">RAG pipelines</strong> and
                vector embeddings. I integrate tomorrow's technology today, so
                your product stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnershipSectionContent;
