import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: ${({ theme }) => theme.contentPadding.sm};
  padding-block: 4rem 5.625rem;
  background: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledFooterNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 2.625rem 0 5.3125rem;
  }

  a {
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const StyledFooterSocials = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
