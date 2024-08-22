import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding-inline: ${({ theme }) => theme.contentPadding.xs};
  padding-block: 1.5rem;

  ${media.min("md")`
    display: flex;
    gap: 3.4375rem;
    padding-inline: ${({ theme }) => theme.contentPadding.sm};
  `}

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
