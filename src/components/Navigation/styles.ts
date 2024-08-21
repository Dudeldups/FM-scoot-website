import styled from "styled-components";
import { media } from "../../utils/media";
import convertHexToRGB from "../../utils/convertHexToRGB";
import { motion } from "framer-motion";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 4rem 1.5rem 1.5rem;

  ${media.max("md")`
      position: fixed;
      inset: 4.8125rem 0 0 0;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(
        to right, 
        ${({ theme }) => convertHexToRGB(theme.colors.darkNavy, 0.6)} 30%, 
        ${({ theme }) => theme.colors.darkNavy} 30%
      );
      align-items: flex-end;
      text-align: right;
    `}
`;

export const MotionStyledNavigation = motion(StyledNavigation);
