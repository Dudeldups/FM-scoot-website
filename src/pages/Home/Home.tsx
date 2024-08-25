import useDocumentTitle from "../../hooks/useDocumentTitle";

import { StyledHeroSection, StyledHomeSection } from "./styles";
import Btn from "../../components/Btn/Btn";

import MobileHeroImg from "../../assets/images/hero-img/home-hero-mobile.jpg";
import TabletHeroImg from "../../assets/images/hero-img/home-hero-tablet.jpg";
import DesktopHeroImg from "../../assets/images/hero-img/home-hero-desktop.jpg";

import LocateImg from "../../assets/images/icons/locate.svg";
import RideImg from "../../assets/images/icons/ride.svg";
import ScooterImg from "../../assets/images/icons/scooter.svg";
import { theme } from "../../styles/theme";

type HomeProps = {
  className?: string;
};

const Home = ({ className }: HomeProps) => {
  useDocumentTitle();

  return (
    <StyledHomeSection className={className}>
      <StyledHeroSection>
        <picture>
          <source
            media={`(min-width: ${theme.breakpoints.lg}px)`}
            srcSet={DesktopHeroImg}
          />
          <source
            media={`(min-width: ${theme.breakpoints.md}px)`}
            srcSet={TabletHeroImg}
          />
          <img
            src={MobileHeroImg}
            alt="A person pushing a yellow scooter down the road."
          />
        </picture>

        <div>
          <h1>Scooter sharing made simple</h1>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <Btn>Get Scootin</Btn>
        </div>
      </StyledHeroSection>

      <ul>
        <li>
          <img src={LocateImg} alt="" />
          <h2>Locate with app</h2>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </li>

        <li>
          <img src={RideImg} alt="" />
          <h2>Pick your scooter</h2>
          <p>
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </li>

        <li>
          <img src={ScooterImg} alt="" />
          <h2>Enjoy the ride</h2>
          <p>
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </li>
      </ul>
    </StyledHomeSection>
  );
};

export default Home;
