import styled from "styled-components";
import { media } from "../../../utils/media";
// import basePath from "../../../utils/basePath";

export const StyledFAQSection = styled.section`
  max-width: ${({ theme }) =>
    `calc(${theme.maxContentWidth} + 2 * ${theme.contentPadding.lg})`};
  margin-top: 7.5rem;
  margin-inline: auto;
  padding-bottom: 7.5rem;
  padding-inline: ${({ theme }) => theme.contentPadding.sm};

  ${media.min("md")`
      padding-inline: ${({ theme }) => theme.contentPadding.md};
    `}

  ${media.min("lg")`
      margin-top: 10rem;
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
      padding-bottom: 10rem;
    `}

  h2 {
    font-size: 2rem;
    letter-spacing: -0.0894rem;
    text-align: center;

    ${media.min("md")`
      font-size: 3rem;
      letter-spacing: -0.1338rem;
    `}
  }

  & article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3rem;
    max-width: 42rem;
    margin-inline: auto;

    ${media.min("lg")`
      max-width: 100%;
      flex-direction: row;
      justify-content: space-between;
      gap: 8rem;
    `}
  }

  & h3 {
    flex-shrink: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-align: center;

    ${media.min("md")`
      font-size: ${({ theme }) => theme.fontSizes.lg};
    `}
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  & details {
    padding: 2rem 1.75rem;
    background-color: ${({ theme }) => theme.colors.snow};

    & summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
    }

    & strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.darkNavy};

      ${media.min("md")`
        font-size: 1.375rem;
      `}
    }

    & p {
      margin-top: 1rem;
    }
  }

  & details > summary {
    &::after {
      content: "";
      display: inline-block;
      width: 0.75rem;
      aspect-ratio: 1;
      border-top: 0.2rem solid ${({ theme }) => theme.colors.yellow};
      border-left: 0.2rem solid ${({ theme }) => theme.colors.yellow};
      rotate: 45deg;
      transition: rotate 0.25s, transform 0.25s;
    }
  }

  & details[open] > summary::after {
    rotate: 225deg;
    transform: translate(25%, 25%);
  }
`;
