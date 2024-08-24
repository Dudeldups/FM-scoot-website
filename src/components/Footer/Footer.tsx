import { Link } from "react-router-dom";
import { StyledFooter, StyledFooterNav, StyledFooterSocials } from "./styles";
import { StyledScootLogo, StyledSocialIcon } from "../SVGs/styles";
import GooglePlayImg from "../../assets/images/google-play.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <h2>Sign up and scoot off today</h2>
        <div>
          <a href="#" aria-label="visit the Google Play Store">
            <img src={GooglePlayImg} alt="" />
          </a>
        </div>
      </section>
      <Link to="/">
        <StyledScootLogo />
      </Link>
      <StyledFooterNav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </StyledFooterNav>
      <StyledFooterSocials>
        <li>
          <a href="#" aria-label="facebook">
            <StyledSocialIcon type="facebook" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="x">
            <StyledSocialIcon type="x" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="instagram">
            <StyledSocialIcon type="instagram" />
          </a>
        </li>
      </StyledFooterSocials>
    </StyledFooter>
  );
};

export default Footer;
