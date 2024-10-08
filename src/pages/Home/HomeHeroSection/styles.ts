import styled from "styled-components";
import { media } from "../../../utils/media";
import basePath from "../../../utils/basePath";

export const StyledHeroSection = styled.section`
  overflow-x: hidden;
  display: grid;
  grid-template: "full";

  background-image: url("${basePath}assets/images/patterns/right-arrow.svg");
  background-repeat: no-repeat;
  background-position: calc(40% - 16rem) calc(100% - 1rem);

  ${media.min("xs")`
    background-position: calc(40% - 16rem) calc(100% - 2rem);
  `}

  ${media.min("sm")`
    background-image: url("${basePath}assets/images/patterns/right-arrow.svg"),
    url("${basePath}assets/images/patterns/white-circles.svg");
    background-position: calc(40% - 16rem) calc(100% - 3rem), calc(100% + 2rem) calc(100% - 4rem);
  `}

  ${media.min("md")`
    background-position: calc(40% - 16rem) calc(100% - 2rem), calc(100% + 2rem) calc(100% - 3rem);
  `}

  ${media.min("lg")`
    position: relative;
    background-image: url("${basePath}assets/images/patterns/white-circles.svg");
    background-position: calc(100% + 2rem) calc(100% + 2rem);
  `}

  ${media.min("xl")`
    background-position: calc(50% + 40rem) calc(50% + 7.75rem);
  `}

  picture {
    z-index: -1;
    grid-area: full;
    margin-inline: auto;
    width: 100%;

    img {
      width: 100%;
      max-height: 41rem;
      object-fit: cover;
      object-position: 50% 35%;
    }
  }

  div {
    grid-area: full;
    width: 100%;
    max-width: ${({ theme }) =>
      `calc(${theme.maxContentWidth} + ${theme.contentPadding.lg} * 2)`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};
    padding-bottom: 4rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    ${media.min("sm")`
      padding-bottom: 5rem;
    `}

    ${media.min("md")`
      padding-inline: ${({ theme }) => theme.contentPadding.md};
    `}

    ${media.min("lg")`
      align-items: flex-start;
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
      padding-bottom: 0;
      text-align: left;
    `}

    h1 {
      font-size: 2.5rem;
      letter-spacing: -0.1119rem;
      max-width: 16ch;

      ${media.min("md")`
        font-size: ${({ theme }) => theme.fontSizes.xl};
        letter-spacing: -0.1563rem;
      `}
    }

    p {
      max-width: 40ch;
      margin-block: 1.5rem 2.125rem;

      ${media.min("md")`
        max-width: 69ch;
      `}

      ${media.min("lg")`
        position: relative;
        margin-block: 2.5rem;
        max-width: 45ch;

        &::before {
          content: url("${basePath}assets/images/patterns/line.svg");
          position: absolute;
          transform: translateX(-100%);
          inset: 2.5rem auto auto -3rem;
        }

        &::after {
          content: url("${basePath}assets/images/patterns/right-arrow.svg");
          position: absolute;
          inset: 2.5rem -2.5rem auto auto;
          transform: translateX(100%);
        }
      `}
    }

    p,
    button {
      ${media.min("lg")`
        margin-left: 4.5rem;
      `}
    }
  }
`;
