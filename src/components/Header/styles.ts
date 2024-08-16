import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.darkNavy};

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;
