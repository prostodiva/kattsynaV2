import right_cover from "@/assets/bg/right_cover.webp"
import left_cover_desktop from "@/assets/bg/left_cover_desktop.webp"
import left_cover_mobile from "@/assets/bg/left_cover_mobile.webp"
import Button from "@/components/ui/Button.tsx";

function HeroContent() {

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-dvh">

          {/*Left side - always visible*/}
          <div className="relative items-end justify-center overflow-x-hidden">
              <picture className="absolute inset-0 w-full h-full">
                  <source media="(min-width: 768px)" srcSet={left_cover_desktop} />
                  <img src={left_cover_mobile} alt="" className="w-full h-full object-cover" />
              </picture>

              <div className="absolute top-56 lg:top-96 xl:top-112 2xl:top-188 left-5 right-5 2xl:left-10">
                  <h1>
                  <span className="font-unitea font-bold block text-6xl 2xl:text-8xl leading-none">
                    Reliable<br className="md:hidden" />
                      {" "}Full-Stack<br />
                        Engineering
                  </span>
                  </h1>
                  <p className="font-goorm font-normal text-text-secondary pt-8 text-xl md:text-2xl leading-tight lg:leading-none max-w-2xl">
                      A Senior who takes full responsibility for the stack, so your team can
                      focus on business goals. Ensuring security, high speed, and
                      predictable performance of your application
                  </p>

                  <div className="pt-8">
                      <Button variant="primary" rounded>Get In Touch</Button>
                  </div>

              </div>
          </div>

          {/*Right side - hidden on mobile*/}
          <div className="relative h-dvh hidden md:block">
              <img src={right_cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
      </div>
  );
}
export default HeroContent;