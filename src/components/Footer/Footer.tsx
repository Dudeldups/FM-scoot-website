import { Link } from "react-router-dom";
import { StyledFooter, StyledFooterNav, StyledFooterSocials } from "./styles";
import { StyledScootLogo } from "../SVGs/styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledScootLogo />
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
        <li>FB Logo</li>
        <li>X Logo</li>
        <li>Instagram Logo</li>
      </StyledFooterSocials>
    </StyledFooter>
  );
};

export default Footer;
