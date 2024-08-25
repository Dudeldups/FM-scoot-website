import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

import StyleResets from "../styles/StyleResets";
import GlobalStyles from "../styles/GlobalStyles";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const navigate = useNavigate();

  // Query string redirect for GitHub Pages
  useEffect(() => {
    // Check if the URL contains a query string starting with ?/
    const queryString = window.location.search;
    if (queryString.startsWith("?/")) {
      // Extract the path from the query string (e.g., /about)
      const path = queryString.slice(2).split("&")[0]; // Removes ?/ and anything after &

      // Navigate to the extracted path
      navigate(path, { replace: true });
    }
  }, [navigate]);

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
