import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Space Mono";
    font-weight: 700;
    src: url("/assets/fonts/Space_Mono/SpaceMono-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Lexend Deca";
    font-weight: 400;
    src: url("/assets/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf") format("truetype");
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamilies.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.heading};
  }
  
  #root {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  
`;

export default GlobalStyles;
