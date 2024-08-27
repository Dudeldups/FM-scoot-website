import HeroSection from "../../components/HeroSection/HeroSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const About = () => {
  useDocumentTitle();

  return (
    <>
      <HeroSection site="about" />
      <IntroductionSection heading="Our values" />
    </>
  );
};

export default About;
