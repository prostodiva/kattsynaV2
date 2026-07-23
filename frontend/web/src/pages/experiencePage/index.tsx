import Seo from '@/components/Seo';
import ExperienceHero from './components/ExperienceHero.tsx';
import ResultsSection from './components/ResultsSection.tsx';
import OwnershipSection from './components/OwnershipSection.tsx';
import CallToAction from './components/CallToAction.tsx';

function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience — Margarita Kattsyna"
        description="Proven experience scaling systems: results-driven full-stack engineering, AI-empowered ownership, and reliable delivery across startups and production apps."
        path="/experience"
      />
      <ExperienceHero />
      <ResultsSection />
      <OwnershipSection />
      <CallToAction />
    </>
  );
}

export default ExperiencePage;
