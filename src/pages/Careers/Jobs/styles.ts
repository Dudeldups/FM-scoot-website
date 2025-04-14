import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledJobsSection = styled.section`
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
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.75rem;
    background-color: ${({ theme }) => theme.colors.snow};

    ${media.min("md")`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}

    button {
      ${media.min("md")`
        padding: 0.75rem 5rem;
      `}
    }
  }

  hgroup {
    text-align: center;

    ${media.min("md")`
          text-align: left;

    `}

    p {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.darkNavy};
    }
  }
`;
