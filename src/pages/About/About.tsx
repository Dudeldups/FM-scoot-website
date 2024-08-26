import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const About = () => {
  useDocumentTitle();

  return (
    <>
      About
      <IntroductionSection heading="Our values" />
    </>
  );
};

export default About;
