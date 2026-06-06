import block_3 from '@/assets/bg/Block_3.webp';
import card from '@/assets/card.webp';
import Button from '@/components/ui/Button';
import { cards } from "@/pages/homePage/components/data";

function ExpertiseContent() {
  return (
    <div className="relative flex flex-col justify-center p-10 md:min-h-screen">
      <picture className="absolute inset-0">
        <img src={block_3} alt="" className="w-full h-full object-cover" />
      </picture>

      <div className="flex justify-center mb-10">
        <h1 className="relative text-center md:text-start font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
          My Core Competencies
        </h1>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-5 md:gap-y-10 xl:gap-y-0 md:gap-x-5 xl:gap-x-0">
        {cards.map(({ title, text, col }) => (
          <div
            key={title}
            className={`relative flex flex-col justify-between p-5 2xl:p-20 min-h-64 ${col}`}
          >
            <img
              src={card}
              alt=""
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
export default ExpertiseContent;
