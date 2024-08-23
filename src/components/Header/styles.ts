import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHeader = styled.header`
  max-width: ${({ theme }) =>
    `calc(${theme.maxContentWidth} + ${theme.contentPadding.lg} * 2)`};
  padding-inline: ${({ theme }) => theme.contentPadding.sm};
  padding-block: 1.5rem;

  ${media.min("md")`
    display: flex;
    gap: 3.4375rem;
    padding-inline: ${({ theme }) => theme.contentPadding.md};
  `}

  ${media.min("lg")`
    gap: 3.6rem;
    padding-inline: ${({ theme }) => theme.contentPadding.lg};
  `}

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
