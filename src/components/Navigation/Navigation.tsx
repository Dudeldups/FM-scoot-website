import { NavLink } from "react-router-dom";
import Btn from "../Btn/Btn";
import { StyledNavigation } from "./styles";
import { useRefStore } from "../../stores/refStore";

type NavigationProps = {
  className?: string;
};

const Navigation = ({ className }: NavigationProps) => {
  const appStoreSectionRef = useRefStore(
    state => state.refs["appStoreSection"]
  );

  const handleGetScootinClick = () => {
    if (appStoreSectionRef?.current) {
      appStoreSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

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
      <Btn onClick={() => handleGetScootinClick()}>Get Scootin</Btn>
    </StyledNavigation>
  );
};

export default Navigation;
