import skillsHero from "@/assets/bg/skillsHero.webp"

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
        </div>
    </div>
  );
}

export default SkillsHeroContent;
