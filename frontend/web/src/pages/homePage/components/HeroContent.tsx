import right_cover from "@/assets/bg/right_cover.webp"
import left_cover_desktop from "@/assets/bg/left_cover_desktop.webp"
import left_cover_mobile from "@/assets/bg/left_cover_mobile.webp"
import Button from "@/components/ui/Button.tsx";
import {Chat} from "@/components/chat/Chat.tsx";
import {useState} from "react";
import { CgCloseO } from "react-icons/cg";

function HeroContent() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleGetInTouch = () => {
        //https://www.linkedin.com/in/margarita-kattsyna/
        console.log("get in touch clicked")
    }
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-dvh">

          {/*Left side - always visible*/}
          <div className="relative items-end justify-center overflow-x-hidden">
              <picture className="absolute inset-0 w-full h-full">
                  <source media="(min-width: 768px)" srcSet={left_cover_desktop} />
                  <img src={left_cover_mobile} alt="" className="w-full h-full object-cover" />
              </picture>

              <div className="absolute top-44 md:top-80 lg:top-96 xl:top-112 2xl:top-200 left-5 right-5 md:left-8 2xl:left-10">
                  <h1>
                  <span className="font-unitea font-bold block text-6xl 2xl:text-8xl leading-none">
                    Reliable <br className="md:hidden" />
                      Full-Stack<br />
                      Engineering
                  </span>
                  </h1>
                  <p className="font-goorm font-normal text-text-secondary pt-8 text-xl 2xl:text-2xl leading-tight max-w-2xl">
                      A Senior who takes full responsibility for the stack, so your team can
                      focus on business goals. Ensuring security, high speed, and
                      predictable performance of your application
                  </p>

                  <div className="pt-8" onClick={handleGetInTouch}>
                      <Button variant="primary">Get In Touch</Button>
                  </div>

              </div>
          </div>

          <div className="relative h-dvh hidden lg:block">
              <img src={right_cover} alt="" className="absolute inset-0 h-full w-full object-cover" />

                <div className={`absolute inset-0 backdrop-blur-xs transition-opacity duration-100 ${
                    isChatOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`} />

                <div className="absolute bottom-8 right-12 z-20">
                    <div
                        className={`transition-all duration-300 ${
                            isChatOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
                        }`} 
                    >
                    
                      <Button
                          type="button"
                          variant="secondary"
                          onClick={() => setIsChatOpen(true)}
                      >
                          Ask AI
                      </Button>
                  </div>

                  <div
                      className={`absolute bottom-0 right-0 transition-all duration-300 ${
                          isChatOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                  >
                      <div className="relative">
                          <Button
                              type="button"
                              onClick={() => setIsChatOpen(false)}
                              className="absolute -top-3 -right-3 z-30"
                              variant="ternary"
                          >
                              <CgCloseO />
                          </Button>

                          <Chat />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default HeroContent;