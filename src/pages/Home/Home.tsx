import useDocumentTitle from "../../hooks/useDocumentTitle";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HowToSection from "./HowToSection/HowToSection";

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <HomeHeroSection />
      <HowToSection />
    </>
  );
};

export default Home;
