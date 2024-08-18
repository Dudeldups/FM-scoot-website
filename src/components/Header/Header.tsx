// TODO find out where the Get Scootin button should link to (modal? app store section?)

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { StyledHeader } from "./styles";
import { StyledScootLogo } from "../SVGs/styles";
import Btn from "../Btn/Btn";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { pathname } = useLocation();

  // Close the hamburger menu when the user presses the Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Focus the first link in the navigation when the hamburger menu opens
  useEffect(() => {
    if (isHamburgerOpen) {
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    }
  }, [isHamburgerOpen]);

  // Close the hamburger menu when the user navigates to a new page
  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [pathname]);

  return (
    <StyledHeader>
      <div>
        <Link to="/" onClick={() => setIsHamburgerOpen(false)}>
          <StyledScootLogo />
        </Link>
        <HamburgerButton
          isOpen={isHamburgerOpen}
          setIsOpen={setIsHamburgerOpen}
        />
      </div>

      {isHamburgerOpen && (
        <nav id="navigation">
          <ul>
            <li>
              <NavLink
                to="/about"
                ref={firstLinkRef}
                onClick={() => setIsHamburgerOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/location" onClick={() => setIsHamburgerOpen(false)}>
                Location
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" onClick={() => setIsHamburgerOpen(false)}>
                Careers
              </NavLink>
            </li>
          </ul>
          <Btn onClick={() => setIsHamburgerOpen(false)}>Get Scootin</Btn>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
