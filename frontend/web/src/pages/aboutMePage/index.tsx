import Seo from '@/components/Seo';
import AboutMeHeroSection from '@/pages/aboutMePage/components/AboutMeHeroSection';

function AboutMePage() {
  return (
    <>
      <Seo
        title="About — Margarita Kattsyna"
        description="About Margarita Kattsyna — a full-stack engineer who takes end-to-end ownership to build reliable, scalable, and secure systems."
        path="/about"
      />
      <AboutMeHeroSection />
    </>
  );
}

export default AboutMePage;
