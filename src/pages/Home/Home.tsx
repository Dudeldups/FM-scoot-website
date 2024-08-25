import useDocumentTitle from "../../hooks/useDocumentTitle";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HowToList from "./HowToList/HowToList";

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <HomeHeroSection />
      <HowToList />
    </>
  );
};

export default Home;
