import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledHowToSection = styled.section`
  margin-top: 7.5rem;

  ${media.min("lg")`
    overflow-x: hidden;
    margin-top: 10rem;
  `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};

    ${media.min("md")`
      gap: 2.5rem;
      max-width: 42rem;
      padding-inline: ${({ theme }) => theme.contentPadding.md};
      margin-inline: auto;
    `}

    ${media.min("lg")`
      flex-direction: row;
      gap: 1.875rem;
      max-width: ${({ theme }) =>
        `calc(${theme.maxContentWidth} + 2 * ${theme.contentPadding.lg})`};
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
    `}

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;

      ${media.min("md")`
        display: grid;
        gap: 1.7rem 5rem;
        grid-template-areas: "icon heading"
                            "icon text";
        text-align: left;
        align-items: start;
      `}

      ${media.min("lg")`
        display: flex;
        gap: 1.7rem;
      `}

      // styles for the grey bar, starting from the image of the last <li>
      &:last-of-type {
        position: relative;

        &::after {
          // going up for tablet
          ${media.min("md")`
            content: "";
            position: absolute;
            z-index: -5;
            inset: 0 auto auto 0;
            transform: translate(calc(3rem - 50%), calc(-100% + 3rem));
            width: 1rem;
            height: 38rem;
            background: ${({ theme }) => theme.colors.lightGrey};
          `}

          // going left for desktop
          ${media.min("lg")`
            transform: translate(calc(-100% + 3rem), calc(-50% + 3rem));
            width: 100vw;
            height: 1rem;
          `}
        }
      }
    }

    img {
      width: 3.5rem;
      height: auto;
      grid-area: icon;

      ${media.min("md")`
        width: 6rem;
      `}
    }

    h3 {
      grid-area: heading;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.gray};

      ${media.min("md")`
        font-size: ${({ theme }) => theme.fontSizes.md};
      `}

      ${media.min("lg")`
        margin-top: 0.5rem;
      `}
    }

    p {
      grid-area: text;
      max-width: 35ch;
      color: ${({ theme }) => theme.colors.darkNavy};
    }
  }
`;
