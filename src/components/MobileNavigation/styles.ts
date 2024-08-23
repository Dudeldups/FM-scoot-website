import styled from "styled-components";
import convertHexToRGB from "../../utils/convertHexToRGB";
import { motion } from "framer-motion";

const StyledMobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  inset: 4.8125rem 0 0 0;
  padding: 4rem ${({ theme }) => theme.contentPadding.sm} 1.5rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => convertHexToRGB(theme.colors.darkNavy, 0.6)} 30%,
    ${({ theme }) => theme.colors.darkNavy} 30%
  );
  text-align: right;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  li > a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamilies.heading};
  }
`;

export const MotionStyledMobileNavigation = motion(StyledMobileNavigation);
