import HeroSection from "../../components/HeroSection/HeroSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Careers = () => {
  useDocumentTitle();

  return (
    <div>
      <HeroSection site="careers" />
      <IntroductionSection heading="Why join us?" />
    </div>
  );
};

export default Careers;
