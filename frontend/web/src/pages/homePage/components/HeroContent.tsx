import right_cover from '@/assets/bg/right_cover.webp';
import left_cover_desktop from '@/assets/bg/left_cover_desktop.webp';
import left_cover_mobile from '@/assets/bg/left_cover_mobile.webp';
import Button from '@/components/ui/Button.tsx';
import { Chat } from '@/components/chat/Chat.tsx';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';

function HeroContent() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      {/*Left side*/}
      {/* From lg up the copy sits low in the hero, anchored to the bottom of
          the column by flex rather than pinned to a percentage of the viewport
          height. The old `top-[75%]` + translate took the block out of flow, so
          its lower half (and the CTA with it) fell past the fold on any
          viewport shorter than ~1174px; bottom-aligned and in flow, the block's
          own pb-20 sets the gap and the column grows instead of clipping. */}
      <div className="relative overflow-hidden min-h-screen lg:min-h-dvh lg:flex lg:flex-col lg:justify-end">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 768px)" srcSet={left_cover_desktop} />
          <img
            src={left_cover_mobile}
            alt=""
            className="w-full h-full object-cover translate-y-15"
          />
        </picture>

        {/* pt keeps the heading clear of the absolutely positioned header,
            which grows to h-24 at 2xl. */}
        <div className="relative z-10 px-5 md:px-8 pt-24 pb-20 2xl:pt-32">
          <h1>
            <span className="font-unitea font-bold block text-5xl md:text-7xl 2xl:text-9xl leading-none">
              Reliable <br className="md:hidden" />
              Full-Stack
              <br />
              Engineering
            </span>
          </h1>
          <p className="font-goorm font-normal text-text-secondary pt-5 pb-5 text-xl xl:text-sm 2xl:text-xl leading-tight max-w-sm md:max-w-xl lg:max-w-lg xl:max-w-md 2xl:max-w-xl">
            A Senior who takes full responsibility for the stack, so your team
            can focus on business goals. Ensuring security, high speed, and
            predictable performance of your application
          </p>

          <div className="flex flex-col items-center lg:hidden space-y-4 mt-6">
            <img
              src={right_cover}
              alt=""
              className="w-84 md:w-178 h-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-center mt-5 lg:items-start lg:mt-0">
            <a
              href="https://www.linkedin.com/in/margarita-kattsyna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" rounded>
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/*Right side */}
      <div className="hidden lg:block relative min-h-dvh overflow-hidden">
        <img
          src={right_cover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover translate-y-15"
        />
        <div
          className={`absolute inset-0 backdrop-blur-xs transition-opacity duration-100 ${
            isChatOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        <div className="hidden lg:block absolute bottom-8 right-12 z-20">
          <div
            className={`transition-all duration-300 ${
              isChatOpen
                ? 'opacity-0 scale-95 pointer-events-none'
                : 'opacity-100'
            }`}
          >
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsChatOpen(true)}
              rounded
            >
              Ask AI
            </Button>
          </div>

          <div
            className={`absolute bottom-0 right-0 transition-all duration-300 ${
              isChatOpen
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="relative">
              <Button
                type="button"
                onClick={() => setIsChatOpen(false)}
                ariaLabel="Close chat"
                className="absolute -top-3 -right-3 z-30"
                variant="ternary"
                rounded
              >
                <CgCloseO />
              </Button>

              <Chat />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile AI chat — the desktop version lives in the right column (hidden below lg) */}
      <div className="lg:hidden">
        {/* Floating "Ask AI" trigger */}
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            isMobileChatOpen
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100'
          }`}
        >
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsMobileChatOpen(true)}
            rounded
          >
            Ask AI
          </Button>
        </div>

        {/* Fullscreen overlay + chat panel */}
        {isMobileChatOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setIsMobileChatOpen(false)}
            />
            <div className="relative z-10">
              <Button
                type="button"
                onClick={() => setIsMobileChatOpen(false)}
                ariaLabel="Close chat"
                className="absolute -top-3 -right-3 z-30"
                variant="ternary"
                rounded
              >
                <CgCloseO />
              </Button>

              <Chat />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default HeroContent;
