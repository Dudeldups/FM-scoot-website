// TODO find out where the Get Scootin button should link to (modal? app store section?)

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { StyledHeader } from "./styles";
import { StyledScootLogo } from "../SVGs/styles";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navigation from "../Navigation/Navigation";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
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

  // Close the hamburger menu when the user navigates to a new page
  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [pathname]);

  return (
    <StyledHeader>
      <div>
        <Link
          to="/"
          onClick={() => setIsHamburgerOpen(false)}
          aria-label="Home">
          <StyledScootLogo />
        </Link>
        <HamburgerButton
          isOpen={isHamburgerOpen}
          setIsOpen={setIsHamburgerOpen}
        />
      </div>

      <AnimatePresence>
        {isHamburgerOpen && (
          <Navigation
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
