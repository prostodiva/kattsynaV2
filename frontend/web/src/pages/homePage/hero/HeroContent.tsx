import right_cover from "@/assets/bg/right_cover.png"
import left_cover_desktop from "@/assets/bg/left_cover_desktop.png"
import left_cover_mobile from "@/assets/bg/left_cover_mobile.png"

function HeroContent() {

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">

          {/*Left side - always visible*/}
          <div className="relative h-dvh">
              <picture className="absolute inset-0 w-full h-full">
                  <source media="(min-width: 768px)" srcSet={left_cover_desktop} />
                  <img src={left_cover_mobile} alt="" className="w-full h-full object-cover" />
              </picture>

              <div className="absolute top-20 md:top-40 lg:top-96 xl:top-112 2xl:top-188 left-5 2xl:left-10">
                  <h1>
                  <span className="font-unitea font-bold block text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                    Reliable Full-Stack <br /> Engineering
                  </span>
                  </h1>
                  <p className="font-goorm font-normal text-text-secondary pt-5 text-xl md:text-2xl 2xl:text-3xl leading-none max-w-2xl">
                      A Senior who takes full responsibility for the stack, so you team can
                      focus on business goals. Ensuring security, high speed, and
                      predictable performance of your application
                  </p>
              </div>
          </div>

          {/*Right side - hidden on mobile*/}
          <div className="relative h-dvh hidden md:block">
              <img src={right_cover} alt="" className="absolute w-full h-full object-cover" />
          </div>
      </div>
  );
}
export default HeroContent;