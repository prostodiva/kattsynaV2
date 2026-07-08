import { cards } from "@/components/data";
import card from '@/assets/card.webp';
import Button from "@/components/ui/Button";

function ResultSectionContent() {
  return (
    <div className="flex-col justify-center p-5">
      <h1 className="text-center">
        <span className="font-unitea font-bold block text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl 2xl:leading-none">
          Engineering That Drives Results
        </span>
      </h1>

      <p className="relative font-goorm text-text-gray 2xl:text-xl max-w-sm md:max-w-sm xl:max-w-md leading-tight">
        I focus on solving business problems, not just
        writing syntax. Here is how my full-stack
        expertise protects your product from technical
        debt, server crashes, and poor user retention.
      </p>
      

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

        <div className="md:col-start-2 xl:col-start-3 flex items-center md:items-end xl:items-center justify-center mt-5 xl:-mt-30 2xl:-mt-50">
          <Button variant="secondary" rounded className="w-full">
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultSectionContent;