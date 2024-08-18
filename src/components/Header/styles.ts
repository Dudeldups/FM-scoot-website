import styled from "styled-components";
import { media } from "../../utils/media";
import convertHextoRGB from "../../utils/convertHextoRGB";

export const StyledHeader = styled.header`
  ${media.min("md")`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
  `}

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.max("md")`
      background-color: ${({ theme }) => theme.colors.white};
      padding: 1.5rem;
      z-index: 4;
    `}
  }

  nav {
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
        ${({ theme }) => convertHextoRGB(theme.colors.darkNavy, 0.6)} 30%, 
        ${({ theme }) => theme.colors.darkNavy} 30%
      );
      align-items: flex-end;
      text-align: right;
    `}
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    ${media.max("md")`
      flex-direction: column;
      gap: 1.5rem;
      font-size: ${({ theme }) => theme.fontSizes.md};
    `}
  }

  li > a {
    color: ${({ theme }) => theme.colors.dimGrey};
    font-weight: bold;
    text-decoration: none;

    ${media.max("md")`
      font-family: ${({ theme }) => theme.fontFamilies.heading};
      color: ${({ theme }) => theme.colors.lightGrey};
    `}
  }
`;
