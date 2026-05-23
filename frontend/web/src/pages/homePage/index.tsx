import HomeHero from "./hero/HomeHero";
import ValueSection from "./value/ValueSection";
import AboutMePage from "@/pages/aboutMePage";
import ExpertiseSection from "@/pages/homePage/expertise/ExpertiseSection.tsx";
import ProjectSection from "@/pages/homePage/projects/ProjectSection.tsx";


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