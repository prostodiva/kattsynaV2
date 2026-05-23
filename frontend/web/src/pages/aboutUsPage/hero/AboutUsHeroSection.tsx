import AboutUsHeroContent from './AboutUsHeroContent.tsx';
import Section from '@/components/Section.tsx';

function AboutUsHeroSection() {
  return (
    <Section
      style={{ backgroundColor: '#dee886' }}
    >
      <AboutUsHeroContent />
    </Section>
  );
}

export default AboutUsHeroSection;