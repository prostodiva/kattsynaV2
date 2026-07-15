import Section from "@/components/Section";
import { recordContent, recordEntries } from "../skillsContent";

function RecordSection() {
  return (
    <Section>
      <div className="w-full">
        <div className="relative w-full overflow-hidden min-h-screen lg:min-h-dvh flex flex-col px-5 md:px-8 py-16 xl:py-20 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-unitea font-bold text-text-primary leading-none text-4xl md:text-6xl 2xl:text-7xl">
              A Track Record of<br className="hidden md:block" /> Reliable Delivery
            </h2>
            <p className="font-goorm text-text-gray max-w-md text-sm md:text-base">
              {recordContent.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {recordEntries.map((job, i) => (
              <div
                key={job.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"
              >
                <div className={i % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}>
                  <span className="inline-block font-stack font-bold text-text-primary bg-surface-card rounded-full px-6 py-3 text-sm md:text-base">
                    {job.title}
                  </span>
                  <div className="mt-4 flex flex-col gap-3">
                    <p className="font-goorm text-text-gray text-sm leading-tight">
                      {job.intro}
                    </p>
                    {job.bullets.map((b) => (
                      <p
                        key={b.lead}
                        className="font-goorm text-text-gray text-sm leading-tight"
                      >
                        <strong className="font-bold text-text-secondary">
                          {b.lead}
                        </strong>{" "}
                        {b.rest}
                      </p>
                    ))}
                    <p className="font-goorm text-text-gray text-sm leading-tight">
                      <strong className="font-bold text-text-secondary">
                        Results:
                      </strong>{" "}
                      {job.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default RecordSection;