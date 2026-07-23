import Seo from '@/components/Seo';
import PrecisionSection from './components/PrecisionSection.tsx';
import RecordSection from './components/RecordSection.tsx';
import SkillsHero from './components/SkillsHero.tsx';

function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills — Margarita Kattsyna"
        description="Engineering precision beyond the code — a track record of reliable delivery across full-stack, AI/RAG systems, and VR/XR development."
        path="/skills"
      />
      <SkillsHero />
      <PrecisionSection />
      <RecordSection />
    </>
  );
}

export default SkillsPage;
