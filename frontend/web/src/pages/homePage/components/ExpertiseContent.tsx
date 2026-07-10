import block_3 from '@/assets/bg/Block_3.webp';
import { cards } from "@/components/data";
import Button from '@/components/ui/Button';
import ResultCard from '@/components/ui/ResultCard';

const layout = [
  'md:col-start-1',
  'md:col-start-2 xl:col-start-3',
  'md:col-start-1 xl:col-start-5',
  'md:col-start-2 xl:col-start-2',
  'md:col-start-1 xl:col-start-4',
];

function ExpertiseContent() {
  return (
    <div className="relative flex flex-col justify-center p-5 md:min-h-screen">
      <picture className="absolute inset-0">
        <img src={block_3} alt="" className="w-full h-full object-cover" />
      </picture>

      <div className="flex justify-center mb-10">
        <h1 className="relative text-center md:text-start font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
          My Core Competencies
        </h1>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-5 md:gap-y-10 xl:gap-y-0 md:gap-x-5 xl:gap-x-0">
        {cards.map(({ title, text }, index) => (
          <ResultCard
            key={title}
            title={title}
            text={text}
            className={`min-h-64 ${layout[index]}`}
            contentClassName="p-5 2xl:p-20"
          />
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
