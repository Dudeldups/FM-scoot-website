import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Variants, motion } from "framer-motion";

import Btn from "../Btn/Btn";
import { MotionStyledMobileNavigation } from "./styles";
import { useRefStore } from "../../stores/refStore";

type MobileNavigationProps = {
  className?: string;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavigation = ({
  className,
  isHamburgerOpen,
  setIsHamburgerOpen,
}: MobileNavigationProps) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const appStoreSectionRef = useRefStore(
    state => state.refs["appStoreSection"]
  );

  // Focus the first link in the navigation when the hamburger menu opens
  useEffect(() => {
    if (isHamburgerOpen) {
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    }
  }, [isHamburgerOpen]);

  // Scroll to the store section when the user clicks on the "Get Scootin" button
  const handleGetScootinClick = () => {
    setIsHamburgerOpen(false);
    if (appStoreSectionRef?.current) {
      appStoreSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const navVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const divVariants: Variants = {
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
        delay: 0.1,
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
    <MotionStyledMobileNavigation
      className={className}
      id="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setIsHamburgerOpen(false)}>
      <motion.div
        variants={divVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}>
        <ul>
          <li>
            <NavLink
              to="/"
              ref={firstLinkRef}
              onClick={() => setIsHamburgerOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsHamburgerOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations" onClick={() => setIsHamburgerOpen(false)}>
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={() => setIsHamburgerOpen(false)}>
              Careers
            </NavLink>
          </li>
        </ul>
        <Btn onClick={() => handleGetScootinClick()}>Get Scootin</Btn>
      </motion.div>
    </MotionStyledMobileNavigation>
  );
};

export default MobileNavigation;
