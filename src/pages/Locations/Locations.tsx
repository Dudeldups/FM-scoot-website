import {
  WorldMapDesktopImg,
  WorldMapMobileImg,
  WorldMapTabletImg,
} from "../../assets/images";
import Btn from "../../components/Btn/Btn";
import HeroSection from "../../components/HeroSection/HeroSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { theme } from "../../styles/theme";
import {
  StyledImageContainer,
  StyledLocationsSection,
  StyledTextContainer,
} from "./styles";

const Locations = () => {
  useDocumentTitle();

  return (
    <>
      <HeroSection site="locations" />

      <StyledLocationsSection>
        <StyledImageContainer>
          <picture>
            <source
              srcSet={WorldMapDesktopImg}
              media={`(min-width: ${theme.breakpoints.lg}px)`}
            />
            <source
              srcSet={WorldMapTabletImg}
              media={`(min-width: ${theme.breakpoints.md}px)`}
            />
            <img src={WorldMapMobileImg} alt="" height="160" width="375" />
          </picture>

          <ul>
            <li>
              <p>New York</p>
            </li>
            <li>
              <p>London</p>
            </li>
            <li>
              <p>Jakarta</p>
            </li>
            <li>
              <p>Yokohama</p>
            </li>
          </ul>
        </StyledImageContainer>

        <StyledTextContainer>
          <h2>Your City Not Listed?</h2>
          <p>
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>

          <Btn>Message Us</Btn>
        </StyledTextContainer>
      </StyledLocationsSection>
    </>
  );
};

export default Locations;
