import styled from "styled-components";
import convertHexToRGB from "../../utils/convertHexToRGB";
import { motion } from "framer-motion";

const StyledMobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: ${({ theme }) =>
    convertHexToRGB(theme.colors.darkNavy, 0.6)};
  text-align: right;

  div {
    height: 100%;
    width: min(90%, 24rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 1.5rem;
    padding: 7rem ${({ theme }) => theme.contentPadding.sm} 1.5rem;
    background-color: ${({ theme }) => theme.colors.darkNavy};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  li > a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    color: ${({ theme }) => theme.colors.lightGrey};
    transition: color 0.3s;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const MotionStyledMobileNavigation = motion(StyledMobileNavigation);
