import HomeHero from "./hero/HomeHero";
import ValueSection from "./value/ValueSection";
import Template from '@/pages/homePage/tailwindTemplate/Template.tsx';


function HomePage() {
    return (
        <>
        <HomeHero />
        <ValueSection />
          <Template />
        </>
    );
}

export default HomePage;