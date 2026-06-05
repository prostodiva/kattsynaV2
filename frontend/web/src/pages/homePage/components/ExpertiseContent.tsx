import block_3 from '@/assets/bg/Block_3.webp';
import card from '@/assets/card.webp';
import Button from '@/components/ui/Button';

const cards = [
  {
    title: 'Reliable Architecture',
    text: "I build production-ready features for cross-platform applications using best practices that ensure your app can handle high traffic. Your company won't lose customers due to server crashes.",
    col: 'md:col-start-1',
  },
  {
    title: 'Full-Cycle Development',
    text: 'No need to hire multiple specialists. I independently develop end-to-end web applications - from database design to the client interface - using modern frameworks and abstractions.',
    col: 'md:col-start-3',
  },
  {
    title: 'User Retention',
    text: 'I identify and resolve critical logic and UI bugs, enhancing app stability, improving onboarding conversion, and reducing user drop-off from your app during onboarding.',
    col: 'md:col-start-5',
  },
  {
    title: 'On-Time Releases',
    text: 'My experience with Agile/Scrum and CI/CD workflows allows me to integrate seamlessly into your team and deliver solutions on schedule. I help you ship new features without chaos or missed sprint deadlines.',
    col: 'md:col-start-2',
  },
  {
    title: 'Clean Code',
    text: 'I combine precision and creativity to produce high-quality code for your products and services. This reduces technical debt and helps you avoid costly rewrites in the future.',
    col: 'md:col-start-4',
  },
];

function ExpertiseContent() {
  return (
    <div className="relative flex flex-col justify-center p-15 md:min-h-screen">
      <picture className="absolute inset-0">
        <img src={block_3} alt="" className="w-full h-full object-cover" />
      </picture>

      <div className="flex justify-center mb-10">
        <h1 className="relative font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
          My Core Competencies
        </h1>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-5">
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

        <div className="md:col-start-3 flex items-center justify-center mt-5 md:-mt-52 xl:-mt-30 2xl:-mt-50">
          <Button variant="secondary" rounded>
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ExpertiseContent;
