import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Variants } from "framer-motion";

import Btn from "../Btn/Btn";
import { MotionStyledNavigation } from "./styles";

type NavigationProps = {
  className?: string;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({
  className,
  isHamburgerOpen,
  setIsHamburgerOpen,
}: NavigationProps) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus the first link in the navigation when the hamburger menu opens
  useEffect(() => {
    if (isHamburgerOpen) {
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    }
  }, [isHamburgerOpen]);

  const navVariants: Variants = {
    hidden: {
      x: "100%",
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "80%",
      scaleX: 0.5,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionStyledNavigation
      className={className}
      id="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
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
    </MotionStyledNavigation>
  );
};

export default Navigation;
