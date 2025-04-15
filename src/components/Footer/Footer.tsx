import { Link } from "react-router-dom";
import { StyledFooter, StyledFooterNav, StyledFooterSocials } from "./styles";
import { StyledScootLogo, StyledSocialIcon } from "../SVGs/styles";
import MobileStore from "../SVGs/MobileStore";
import { useStoreRef } from "../../hooks/useStoreRef";
import { motion, useInView } from "framer-motion";

const buttonContainerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    y: 30,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1.5,
    },
  },
};

const Footer = () => {
  const appStoreSectionRef = useStoreRef("appStoreSection");
  const isInView = useInView(appStoreSectionRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <StyledFooter>
      <section ref={appStoreSectionRef}>
        <div>
          <h2>Sign up and Scoot off today</h2>
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}>
            <motion.a
              href="#"
              aria-label="Apple App Store"
              variants={childVariants}>
              <MobileStore type="apple" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Google Play Store"
              variants={childVariants}>
              <MobileStore type="google" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      <div>
        <Link to="/" aria-label="Home">
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
