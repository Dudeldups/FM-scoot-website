import styled from "styled-components";

export const StyledBtn = styled.button`
  display: inline-block;
  padding: 0.875rem 2.375rem;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition-property: background-color, color, scale;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.white};
    scale: 1.05;
  }
`;
