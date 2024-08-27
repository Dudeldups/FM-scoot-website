import styled from "styled-components";
import { media } from "../../utils/media";
import basePath from "../../utils/basePath";

export const StyledHeroSection = styled.section`
  display: grid;
  grid-template-areas: "shared";
  align-items: center;

  ${media.min("md")`
    background-image: url("${basePath}assets/images/patterns/white-circles.svg");
    background-repeat: no-repeat;
    background-position: calc(100% + 2rem) 50%;
  `}

  ${media.min("xl")`
    background-position: calc(50% + 40rem) 50%;
  `}

  picture {
    grid-area: shared;
    z-index: -1;

    img {
      width: 100%;
      height: auto;
      max-height: 15rem;
      object-fit: cover;
    }
  }

  h1 {
    grid-area: shared;
    place-self: center;
    font-size: 2.5rem;
    letter-spacing: -0.1119rem;
    color: ${({ theme }) => theme.colors.white};

    ${media.min("md")`
      font-size: 3.5rem;
      letter-spacing: -0.1563rem;
      place-self: unset;
      margin-left: 6.25rem;
    `}

    ${media.min("lg")`
      padding-left: ${({ theme }) => theme.contentPadding.lg};
      width: 100%;
      max-width: ${({ theme }) =>
        `calc(${theme.maxContentWidth} + ${theme.contentPadding.lg} * 2)`};
      margin-inline: auto;
    `}
  }
`;
