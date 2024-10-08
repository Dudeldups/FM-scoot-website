// TODO find out where the Get Scootin button should link to (modal? app store section?)

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

import { StyledHeader } from "./styles";
import { StyledScootLogo } from "../SVGs/styles";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const isLargerThanMobile = useMediaQuery(
    `(min-width: ${theme.breakpoints.md}px)`
  );
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  // Deactivate the hamburger menu when the screen size is larger than mobile
  useEffect(() => {
    if (isLargerThanMobile) {
      setIsHamburgerOpen(false);
    }
  }, [isLargerThanMobile, setIsHamburgerOpen]);

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
          <MobileNavigation
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
        )}
      </AnimatePresence>

      {isLargerThanMobile && <Navigation />}
    </StyledHeader>
  );
};

export default Header;
