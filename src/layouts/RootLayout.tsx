import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

import StyleResets from "../styles/StyleResets";
import GlobalStyles from "../styles/GlobalStyles";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyleResets />
      <GlobalStyles />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
