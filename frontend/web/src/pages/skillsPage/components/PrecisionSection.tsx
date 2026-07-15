import Section from "@/components/Section";
import { precisionItems } from "../skillsContent";

function PrecisionSection() {
  return (
    <Section className="bg-surface-section">
      <div className="w-full">
        <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh flex flex-col px-5 md:px-8 py-16 xl:py-20 gap-12">
          <h2 className="font-unitea font-bold text-text-primary leading-none text-4xl md:text-6xl 2xl:text-7xl">
            Engineering Precision<br className="hidden md:block" /> Beyond the Code
          </h2>

          <div className="flex flex-col">
            {precisionItems.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start py-8 border-t border-white/10"
              >
                <span className="md:col-span-6 font-unitea text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-6xl md:text-8xl leading-none">
                  {item.number}
                </span>
                <div className="md:col-span-6 flex flex-col gap-3">
                  <h3 className="font-stack font-bold uppercase text-text-primary text-base md:text-lg tracking-wide">
                    {item.label}
                  </h3>
                  <p className="font-goorm text-text-gray text-sm md:text-base 2xl:text-lg leading-tight">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PrecisionSection;