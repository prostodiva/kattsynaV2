import Section from "@/components/Section";
import cta from "@/assets/bg/cta.webp";
import Button from "@/components/ui/Button";

const tags = ["LLMs", "RAG", "Python"];

function CallToAction() {
  return (
    <Section className="bg-surface-yellow">
      <div className="w-full">
        <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh">
          <picture className="absolute inset-0 w-full h-full">
            <source media="(min-width: 768px)" srcSet={cta} />
            <img
              src={cta}
              alt=""
              className="w-full h-full object-cover lg:object-contain"
            />
          </picture>

          <div className="relative z-10 flex flex-col justify-center min-h-screen lg:min-h-dvh px-5 md:px-8 py-16 lg:items-end">
            <div className="flex flex-col gap-6 lg:max-w-2xl">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-goorm text-text-ternary text-sm md:text-base bg-black/5 rounded-sm px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-unitea font-bold text-4xl md:text-6xl 2xl:text-7xl leading-none">
                <span className="text-surface-section">
                  Need A Developer Who Owns The Process
                </span>{" "}
                <span className="text-text-gray">Not Just The Code?</span>
              </h2>

              <a
                href="https://www.linkedin.com/in/margarita-kattsyna/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button
                  type="button"
                  variant="black"
                  className="w-full md:w-auto font-goorm font-medium uppercase text-text-secondary bg-surface-section rounded-sm px-10 py-4 text-sm md:text-base 2xl:text-xl transition-colors duration-200 hover:bg-brand-nav"
                >
                  Invite To Interview
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CallToAction;
