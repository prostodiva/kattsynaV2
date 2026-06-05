import plunk_1 from '@/assets/plunks/plunk_1.webp';
import plunk_2 from '@/assets/plunks/plunk_2.webp';
import plunk_3 from '@/assets/plunks/plunk_3.webp';
import plunk_1_mobile from '@/assets/plunks/plank_1_mobile.webp';
import plunk_2_mobile from '@/assets/plunks/plank_2_mobile.webp';
import plunk_3_mobile from '@/assets/plunks/plank_3_mobile.webp';

function ValuesSectionContent() {
  return (
    <div className="w-full flex flex-col gap-5 px-10 md:px-8 lg:px-10 2xl:px-16 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1 className="font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
          Cost of Inaction
        </h1>
        <p className="font-goorm font-normal text-text-secondary text-lg 2xl:text-3xl max-w-sm md:max-w-xl 2xl:max-w-4xl leading-tight md:ml-2 2xl:mb-20">
          Hiring an engineer without end-to-end expertise puts your product at
          risk. Are you experiencing any of these problems? Avoid costly
          mistakes - hire a Full-Stack developer who takes ownership and writes
          secure code from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
        <h2 className="font-stack font-bold text-xl 2xl:text-3xl text-text-primary border-t border-zinc-700 pt-4">
          App struggling under high traffic?
        </h2>
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={plunk_1} />
            <img
              src={plunk_1_mobile}
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
          <p className="absolute inset-0 flex items-center text-center md:text-start text-lg 2xl:text-2xl font-goorm font-normal text-text-secondary max-w-md md:max-w-3xl leading-normal px-4 md:ml-2">
            A lack of structure and best practices kills team productivity and
            makes code collaboration almost impossible.
          </p>
        </div>

        <h2 className="font-stack font-bold text-xl 2xl:text-3xl  text-text-primary border-t border-zinc-700 pt-4">
          Losing users to critical bugs?
        </h2>
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={plunk_2} />
            <img
              src={plunk_2_mobile}
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
          <p className="absolute inset-0 flex items-center text-center md:text-start text-lg 2xl:text-2xl font-goorm font-normal text-text-secondary max-w-sm md:max-w-xl 2xl:max-w-3xl leading-normal px-4 md:ml-2">
            Unresolved logic and UI issues ruin the user experience, forcing
            frustrated customers to abandon your app.
          </p>
        </div>

        <h2 className="font-stack font-bold text-xl 2xl:text-3xl text-text-primary border-t border-zinc-700 pt-4">
          Slowed down by messy code?
        </h2>
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={plunk_3} />
            <img
              src={plunk_3_mobile}
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
          <p className="absolute inset-0 flex items-center text-center md:text-start text-lg 2xl:text-2xl font-goorm font-normal text-text-secondary max-w-sm md:max-w-xl 2xl:max-w-3xl leading-normal px-4 md:ml-2">
            Without scalable architecture and automated testing, systems crash
            exactly when traffic spikes.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ValuesSectionContent;
