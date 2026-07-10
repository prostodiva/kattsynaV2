import expC from '@/assets/bg/expC.webp';
import left_cover_mobile from '@/assets/bg/left_cover_mobile.webp';

function ExperienceHeroContent() {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet={expC} />
          <img
            src={left_cover_mobile}
            alt=""
            className="w-full h-full object-cover translate-y-15"
          />
        </picture>

        <div className="relative z-10 px-5 md:px-8 pt-24 pb-20 lg:absolute lg:top-[26%] xl:top-[75%] xl:-translate-y-1/2">
          <h1>
            <span className="font-unitea font-bold block text-5xl md:text-8xl 2xl:text-9xl leading-none">
              Owning the <br className="" />
              Entire Stack
            </span>
          </h1>
          <p className="font-goorm font-normal text-text-secondary pt-5 pb-5 text-xl 2xl:text-2xl leading-tight max-w-sm md:max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            I combine modern frameworks with clean architecture so your 
            product runs fast, withstands peak traffic, and scales seamlessly
            without technical debt.
          </p>
      </div>
      </div>
    </div>
  );
}

export default ExperienceHeroContent;
