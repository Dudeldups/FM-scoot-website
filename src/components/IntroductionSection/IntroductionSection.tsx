import {
  OurCommunityImg,
  OurIntegrityImg,
  OurTechImg,
} from "../../assets/images";
import { StyledIntroductionSection } from "./styles";

type IntroductionSectionProps = {
  className?: string;
  heading: string;
};

const IntroductionSection = ({
  className,
  heading,
}: IntroductionSectionProps) => {
  return (
    <StyledIntroductionSection className={className}>
      <h2>{heading}</h2>
      <ol>
        <li>
          <div>
            <img src={OurTechImg} alt="" width="240" height="240" />
          </div>
          <h3>Our tech</h3>
          <p>
            We’re using cutting edge technology to drive accessible urban
            transportation forward. Our fully electric scooters are a joy to
            ride!
          </p>
        </li>

        <li>
          <div>
            <img src={OurIntegrityImg} alt="" width="240" height="240" />
          </div>
          <h3>Our integrity</h3>
          <p>
            We are fully committed to deliver a great yet safe, sustainable
            micro-mobility experience in every city we serve.
          </p>
        </li>

        <li>
          <div>
            <img src={OurCommunityImg} alt="" width="240" height="240" />
          </div>
          <h3>Our community</h3>
          <p>
            We support every community we serve. All workers are paid a living
            wage based on their location and are Scoot employees.
          </p>
        </li>
      </ol>
    </StyledIntroductionSection>
  );
};

export default IntroductionSection;
