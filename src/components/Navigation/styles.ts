import styled from "styled-components";
import { media } from "../../utils/media";
import convertHexToRGB from "../../utils/convertHexToRGB";
import { motion } from "framer-motion";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;

  ${media.max("md")`
    position: fixed;
    inset: 4.8125rem 0 0 0;
    flex-direction: column;
    align-items: flex-end;
    padding: 4rem ${({ theme }) => theme.contentPadding.xs} 1.5rem;
    background: linear-gradient(
      to right, 
      ${({ theme }) => convertHexToRGB(theme.colors.darkNavy, 0.6)} 30%, 
      ${({ theme }) => theme.colors.darkNavy} 30%
    );
    text-align: right;
  `}

  ${media.min("md")`
    gap: 2.5rem;
    align-items: center;
  `}

  ${media.min("lg")`
    gap: 3.5rem;
  `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    padding: 0;

    ${media.min("md")`
      flex-direction: row;
      /* align-items: center; */
    `}
  }

  li > a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamilies.heading};

    ${media.min("md")`
      color: ${({ theme }) => theme.colors.darkNavy};
      font-size: ${({ theme }) => theme.fontSizes.xs};
    `}
  }
`;

export const MotionStyledNavigation = motion(StyledNavigation);
