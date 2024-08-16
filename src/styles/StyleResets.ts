import { createGlobalStyle } from "styled-components";

const StyleResets = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
}

ol, ul, menu {
  list-style: none;
}

table {
  border-collapse: collapse;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

p {
  text-wrap: pretty;
}

img,
picture, 
svg {
  max-width: 100%;
  display: block;
}

button {
  cursor: pointer;
  border: none;
}

input,
button,
textarea,
select {
  font: inherit;
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

@media (prefers-reduced-motion: no-preference) {
  html:focus-within {
    scroll-behavior: smooth;
  }

  :has(:target) {
    scroll-behavior: smooth;
  }
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default StyleResets;
