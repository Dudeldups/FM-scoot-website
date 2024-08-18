import styled from "styled-components";

export const StyledBtn = styled.button`
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  padding: 0.875rem 2.375rem;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
