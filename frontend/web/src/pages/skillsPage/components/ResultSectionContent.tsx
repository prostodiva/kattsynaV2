import { cards } from "@/components/data";
import card from '@/assets/card.webp';

function ResultSectionContent() {
  return (
    <div className="flex-col justify-center p-5">
      <h1>
        <span className="font-unitea font-bold block text-4xl sm:text-5xl md:text-8xl lg:text-9xl 2xl:text-[12rem] 2xl:leading-none">
          Results
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
        {cards.map(({ title, text })  => (
          <div
            key={title}
            className={`relative flex flex-col justify-between p-5 2xl:p-20 min-h-64`}
          >
            <img
              src={card}
              alt="Card Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <p className="relative font-goorm text-text-secondary 2xl:text-2xl 2xl:leading-tight">
              {text}
            </p>
            <h3 className="relative font-stack font-bold text-xl 2xl:text-3xl mt-8">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultSectionContent;