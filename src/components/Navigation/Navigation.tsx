import { NavLink } from "react-router-dom";
import Btn from "../Btn/Btn";
import { StyledNavigation } from "./styles";

type NavigationProps = {
  className?: string;
};

const Navigation = ({ className }: NavigationProps) => {
  return (
    <StyledNavigation className={className}>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
      </ul>
      <Btn>Get Scootin</Btn>
    </StyledNavigation>
  );
};

export default Navigation;
