import HomeHero from './components/HomeHero.tsx';
import ValueSection from './components/ValueSection.tsx';
import AboutMePage from '@/pages/aboutMePage';
import ExpertiseSection from '@/pages/homePage/components/ExpertiseSection.tsx';
import ProjectSection from '@/pages/homePage/components/ProjectSection.tsx';

function HomePage() {
  return (
    <>
      <HomeHero />
      <ValueSection />
      <ExpertiseSection />
      <ProjectSection />
      <AboutMePage />
    </>
  );
}

export default HomePage;
