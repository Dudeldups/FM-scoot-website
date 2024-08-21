import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;

  ${media.min("md")`
    display: flex;
  `}

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    ${media.max("md")`
      flex-direction: column;
      gap: 1.5rem;
      font-size: ${({ theme }) => theme.fontSizes.md};
    `}
  }

  li > a {
    color: ${({ theme }) => theme.colors.dimGrey};
    font-weight: bold;
    text-decoration: none;

    ${media.max("md")`
      font-family: ${({ theme }) => theme.fontFamilies.heading};
      color: ${({ theme }) => theme.colors.lightGrey};
    `}
  }
`;
