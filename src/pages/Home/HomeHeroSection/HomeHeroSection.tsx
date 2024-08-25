import { theme } from "../../../styles/theme";
import {
  DesktopHomeHeroImg,
  MobileHomeHeroImg,
  TabletHomeHeroImg,
} from "../../../assets/images";
import { StyledHeroSection } from "./styles";
import Btn from "../../../components/Btn/Btn";

type HomeHeroSectionProps = {
  className?: string;
};

const HomeHeroSection = ({ className }: HomeHeroSectionProps) => {
  return (
    <StyledHeroSection className={className}>
      <picture>
        <source
          media={`(min-width: ${theme.breakpoints.lg}px)`}
          srcSet={DesktopHomeHeroImg}
        />
        <source
          media={`(min-width: ${theme.breakpoints.md}px)`}
          srcSet={TabletHomeHeroImg}
        />
        <img
          src={MobileHomeHeroImg}
          alt="A person pushing a yellow scooter down the road."
        />
      </picture>

      <div>
        <h1>Scooter sharing made simple</h1>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <Btn>Get Scootin</Btn>
      </div>
    </StyledHeroSection>
  );
};

export default HomeHeroSection;
