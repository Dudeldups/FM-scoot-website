import { JoinUsImg } from "../../assets/images";
import Btn from "../../components/Btn/Btn";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import HighlightContainer from "../../components/HighlightContainer/HighlightContainer";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Jobs from "./Jobs/Jobs";

const Careers = () => {
  useDocumentTitle();

  return (
    <>
      <HeroSection site="careers" />

      <FeatureSection>
        <h2 className="sr-only">What Scoot Offers</h2>
        <ul>
          <HighlightContainer as="li">
            <div className="img-container">
              <img
                src={JoinUsImg}
                alt="A woman smiling while using her phone."
              />
            </div>
            <div>
              <h3>Care to join our mission?</h3>
              <p>
                We’re always looking for ambitious individuals to help us on our
                journey. If you’re passionate about our mission to provide
                clean, accessible transport to improve urban living we want to
                hear from you!
              </p>
              <Btn to="/about">Say Hello</Btn>
            </div>
          </HighlightContainer>
        </ul>
      </FeatureSection>

      <IntroductionSection heading="Why join us?" />

      <Jobs />
    </>
  );
};

export default Careers;
