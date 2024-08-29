import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledExplanationSection = styled.section`
  overflow-x: hidden;
  margin-block: 7.5rem;

  ${media.min("lg")`
    margin-block: 12.5rem;
  `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 7.5rem;
    max-width: ${({ theme }) =>
      `calc(${theme.maxContentWidth} + 2 * ${theme.contentPadding.lg})`};
    margin-inline: auto;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};

    ${media.min("md")`
      padding-inline: ${({ theme }) => theme.contentPadding.md};
    `}

    ${media.min("lg")`
      gap: 10rem;
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
    `}
  }
`;
