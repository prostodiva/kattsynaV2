import AboutMeSection from './components/AboutMeSection.tsx';
import HomeHero from './components/HomeHero.tsx';
import ValueSection from './components/ValueSection.tsx';
import ExpertiseSection from '@/pages/homePage/components/ExpertiseSection.tsx';
import ProjectSection from '@/pages/homePage/components/ProjectSection.tsx';

function HomePage() {
  return (
    <>
      <HomeHero />
      <ValueSection />
      <ExpertiseSection />
      <ProjectSection />
      <AboutMeSection />
    </>
  );
}

export default HomePage;
