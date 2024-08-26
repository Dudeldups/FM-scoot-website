import { LocateImg, RideImg, ScooterImg } from "../../../assets/images";
import { StyledHowToSection } from "./styles";

type HowToSectionProps = {
  className?: string;
};

const HowToSection = ({ className }: HowToSectionProps) => {
  return (
    <StyledHowToSection className={className}>
      <h2 className="sr-only">How it works</h2>
      <ul>
        <li>
          <img src={LocateImg} alt="" width="56" height="56" />
          <h3>Locate with app</h3>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </li>

        <li>
          <img src={RideImg} alt="" width="56" height="56" />
          <h3>Pick your scooter</h3>
          <p>
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </li>

        <li>
          <img src={ScooterImg} alt="" width="56" height="56" />
          <h3>Enjoy the ride</h3>
          <p>
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </li>
      </ul>
    </StyledHowToSection>
  );
};

export default HowToSection;
