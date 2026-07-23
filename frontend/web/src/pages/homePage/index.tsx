import Seo from '@/components/Seo';
import AboutMeSection from './components/AboutMeSection.tsx';
import HomeHero from './components/HomeHero.tsx';
import ValueSection from './components/ValueSection.tsx';
import ExpertiseSection from '@/pages/homePage/components/ExpertiseSection.tsx';
import ProjectSection from '@/pages/homePage/components/ProjectSection.tsx';

function HomePage() {
  return (
    <>
      <Seo
        title="Margarita Kattsyna — Software Engineer & AI Systems Developer"
        description="Portfolio of Margarita Kattsyna featuring AI systems, full-stack applications, Unity architecture, developer tooling, and software engineering projects."
        path="/"
      />
      <HomeHero />
      <ValueSection />
      <ExpertiseSection />
      <ProjectSection />
      <AboutMeSection />
    </>
  );
}

export default HomePage;
