import { createGlobalStyle } from "styled-components";
import basePath from "../utils/basePath";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Space Mono";
    font-weight: 700;
    src: url("${basePath}assets/fonts/Space_Mono/SpaceMono-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Lexend Deca";
    font-weight: 400;
    src: url("${basePath}assets/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf") format("truetype");
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamilies.body};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    line-height: 1;
  }
  
  #root {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    justify-items: center;

    & > * {
      width: 100%;
    }
  }

  
`;

export default GlobalStyles;
