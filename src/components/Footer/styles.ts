import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.darkGray};

  & > section {
    background-image: url("/assets/images/patterns/semi-circles.svg");
    background-repeat: no-repeat;
    background-position: 75% 100%;
    background-color: ${({ theme }) => theme.colors.darkNavy};

    ${media.min("lg")`
      background-position: calc(100% + 10rem) 100%;
    `}

    ${media.min("2xl")`
      background-position: calc(50% + 34rem) 100%;
    `}

    & > div {
      max-width: ${({ theme }) =>
        `calc(${theme.maxContentWidth} + ${theme.contentPadding.lg} * 2)`};
      margin-inline: auto;
      padding-inline: ${({ theme }) => theme.contentPadding.sm};
      padding-block: 5.5rem;
      color: ${({ theme }) => theme.colors.white};

      ${media.min("md")`
        padding-inline: ${({ theme }) => theme.contentPadding.md};
        padding-block: 3.875rem;
      `}

      ${media.min("lg")`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: ${({ theme }) => theme.contentPadding.lg};
        padding-block: 6.375rem;

      `}

      h2 {
        font-size: 2rem;
        line-height: 1;
        letter-spacing: -0.0894rem;
        margin-bottom: 2.5rem;
        text-align: center;
        max-width: 19ch;
        margin-inline: auto;

        ${media.min("md")`
          font-size: 3rem;
          letter-spacing: -0.134rem;
          max-width: 15ch;
        `}

        ${media.min("lg")`
          text-align: left;
          margin: 0;
        `}
      }

      div {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${({ theme }) =>
      `calc(${theme.maxContentWidth} + ${theme.contentPadding.lg} * 2)`};
    margin-inline: auto;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};
    padding-block: 4rem 5.625rem;
    color: ${({ theme }) => theme.colors.white};

    ${media.min("md")`
      flex-direction: row;
      padding-inline: ${({ theme }) => theme.contentPadding.md};
      padding-block: 2.2rem;
    `}

    ${media.min("lg")`
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
    `}
  }
`;

export const StyledFooterNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 2.625rem 0 5.3125rem;

    ${media.min("md")`
      flex-direction: row;
      gap: 2rem;
      margin: 0 3.625rem 0 3.625rem;
    `}
  }

  a {
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const StyledFooterSocials = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  ${media.min("md")`
    margin-left: auto;
  `}

  li a:hover, li a:focus-visible {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
