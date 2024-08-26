import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledIntroductionSection = styled.section`
  margin-top: 7.5rem;

  h2 {
    font-size: 2rem;
    letter-spacing: -0.0894rem;
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;

    ${media.min("md")`
      font-size: 3rem;
      letter-spacing: -0.1338rem;
    `}
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    max-width: ${({ theme }) =>
      `calc(${theme.maxContentWidth} + 2 * ${theme.contentPadding.lg})`};
    margin-inline: auto;
    margin-top: 4rem;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};

    ${media.min("md")`
      padding-inline: ${({ theme }) => theme.contentPadding.md};
    `}

    ${media.min("lg")`
      flex-direction: row;
      gap: 1.875rem;
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
    `}
  }

  li {
    max-width: 29.5rem;
    margin-inline: auto;
    text-align: center;
  }

  div {
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr 3rem 3rem;

    img {
      grid-area: 1 / 1 / span 2 / 2;
      border-radius: 50%;
    }

    // circle with the li number
    &::after {
      grid-area: 2 / 1 / span 2 / 2;
      content: "0" counter(list-item);
      width: 6rem;
      aspect-ratio: 1;
      background: ${({ theme }) => theme.colors.yellow};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${({ theme }) => theme.fontFamilies.heading};
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  h3 {
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  p {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.darkNavy};
  }
`;
