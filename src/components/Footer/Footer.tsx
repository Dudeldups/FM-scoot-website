import { Link } from "react-router-dom";
import { StyledFooter, StyledFooterNav, StyledFooterSocials } from "./styles";
import { StyledScootLogo, StyledSocialIcon } from "../SVGs/styles";
import MobileStore from "../SVGs/MobileStore";

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <div>
          <h2>Sign up and Scoot off today</h2>
          <div>
            <a href="#" aria-label="Apple App Store">
              <MobileStore type="apple" />
            </a>
            <a href="#" aria-label="Google Play Store">
              <MobileStore type="google" />
            </a>
          </div>
        </div>
      </section>
      <div>
        <Link to="/">
          <StyledScootLogo />
        </Link>
        <StyledFooterNav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
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
      </div>
    </StyledFooter>
  );
};

export default Footer;
