import styled from "styled-components";

export const StyledBtn = styled.button`
  display: inline-block;
  padding: 0.875rem 2.375rem;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
