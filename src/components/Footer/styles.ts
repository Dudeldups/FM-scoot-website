import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledFooterSocials = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
