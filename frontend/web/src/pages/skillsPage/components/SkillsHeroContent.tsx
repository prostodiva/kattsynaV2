import skillsHero from "@/assets/bg/skillsHero.webp"
import Button from "@/components/ui/Button";

function SkillsHeroContent() {
  return (
    <div className="w-full">
        <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh">
            <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet={skillsHero} />
                    <img
                      src={skillsHero}
                      alt=""
                      className="w-full h-full object-cover"
                    />
            </picture>

            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 min-h-screen lg:min-h-dvh px-5 md:px-8">
              <h1 className="font-unitea font-bold text-text-ternary leading-none text-4xl md:text-6xl 2xl:text-7xl max-w-3xl">
                Proven Experience<br className="hidden md:block" /> in Scaling Systems
              </h1>
              <p className="font-goorm text-text-ternary/80 text-sm md:text-base 2xl:text-xl leading-tight max-w-md">
                From ambitious startups to scalable solutions. I build reliable
                architecture so your team can scale securely and ship on time,
                without the fear of technical debt.
              </p>
              <a
                href="https://www.linkedin.com/in/margarita-kattsyna/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button type="button" variant="white">
                  Invite To Interview
                </Button>
              </a>
            </div>
        </div>
    </div>
  );
}

export default SkillsHeroContent;
