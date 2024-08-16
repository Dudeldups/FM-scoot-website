import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;

export default GlobalStyles;
