import { LocateImg, RideImg, ScooterImg } from "../../../assets/images";
import { StyledHowToList } from "./styles";

type HowToListProps = {
  className?: string;
};

const HowToList = ({ className }: HowToListProps) => {
  return (
    <StyledHowToList className={className}>
      <li>
        <img src={LocateImg} alt="" />
        <h2>Locate with app</h2>
        <p>
          Use the app to find the nearest scooter to you. We are continuously
          placing scooters in the areas with most demand, so one should never be
          too far away.
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
          Scan the QR code and the bike will unlock. Retract the cable lock, put
          on a helmet, and you’re off! Always lock bikes away from walkways and
          accessibility ramps.
        </p>
      </li>
    </StyledHowToList>
  );
};

export default HowToList;
