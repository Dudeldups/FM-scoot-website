import { NearYouImg, PaymentsImg, TelemetryImg } from "../../../assets/images";
import Btn from "../../../components/Btn/Btn";
import { StyledExplanationSection } from "./styles";

type ExplanationSectionProps = {
  className?: string;
};

const ExplanationSection = ({ className }: ExplanationSectionProps) => {
  return (
    <StyledExplanationSection className={className}>
      <h2 className="sr-only">What Scoot Offers</h2>
      <ul>
        <li>
          <div>
            <img
              src={TelemetryImg}
              alt="A woman smiling while using her phone."
            />
          </div>
          <div>
            <h3>Easy to use riding telemetry</h3>
            <p>
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <Btn to="/about">Learn More</Btn>
          </div>
        </li>

        <li>
          <div>
            <img
              src={NearYouImg}
              alt="A street and tall buildings in an urban area."
            />
          </div>
          <div>
            <h3>Coming to a city near you</h3>
            <p>
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <Btn to="/about">Learn More</Btn>
          </div>
        </li>

        <li>
          <div>
            <img src={PaymentsImg} alt="A person taking money from a wallet." />
          </div>
          <div>
            <h3>Zero hassle payments</h3>
            <p>
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
            <Btn to="/about">Learn More</Btn>
          </div>
        </li>
      </ul>
    </StyledExplanationSection>
  );
};

export default ExplanationSection;
