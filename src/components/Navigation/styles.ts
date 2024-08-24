import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 2.5rem;
  align-items: center;

  ${media.min("lg")`
    gap: 3.5rem;
  `}

  ul {
    display: flex;
    gap: 2rem;
  }

  li > a {
    font-weight: bold;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.darkNavy};
    transition: color 0.3s;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;
