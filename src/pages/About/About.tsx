import { BetterLivingImg, DigitalEraImg } from "../../assets/images";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import HighlightContainer from "../../components/HighlightContainer/HighlightContainer";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FAQ from "./FAQ/FAQ";

const About = () => {
  useDocumentTitle();

  return (
    <>
      <HeroSection site="about" />

      <FeatureSection>
        <h2 className="sr-only">What Scoot offers</h2>
        <ul>
          <HighlightContainer as="li" reversedArrow>
            <div className="img-container">
              <img
                src={DigitalEraImg}
                alt="A woman smiling while using her phone."
              />
            </div>
            <div>
              <h3>Mobility for the digital era</h3>
              <p>
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </p>
            </div>
          </HighlightContainer>

          <HighlightContainer as="li">
            <div className="img-container">
              <img
                src={BetterLivingImg}
                alt="A street and tall buildings in an urban area."
              />
            </div>
            <div>
              <h3>Better urban living</h3>
              <p>
                We’re helping connect cities and bring people closer together.
                Our scooters are also fully-electric and we offset the minimal
                carbon footprint for each ride.
              </p>
            </div>
          </HighlightContainer>
        </ul>
      </FeatureSection>

      <IntroductionSection heading="Our values" />

      <FAQ />
    </>
  );
};

export default About;
