import useDocumentTitle from "../../hooks/useDocumentTitle";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HowToSection from "./HowToSection/HowToSection";
import ExplanationSection from "./ExplanationSecttion/ExplanationSection";

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <HomeHeroSection />
      <HowToSection />
      <ExplanationSection />
    </>
  );
};

export default Home;
