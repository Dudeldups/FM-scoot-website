import { Link, NavLink } from "react-router-dom";
import { StyledHeader } from "./styles";
import { StyledScootLogo } from "../SVGs/styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledScootLogo />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/location">Location</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
