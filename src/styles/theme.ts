interface Theme {
  colors: Record<string, string>;
  fontFamilies: Record<string, string>;
  fontSizes: Record<string, string>;
  breakpoints: Record<string, number>;
  contentPadding: Record<string, string>;
  maxContentWidth: string;
}

export const theme: Theme = {
  colors: {
    yellow: "#fcb72b",
    darkNavy: "#495567",
    dimGrey: "#939caa",
    lightGrey: "#e5ecf4",
    snow: "#f2f5f9",
    lightYellow: "#fff4df",
    darkGray: "#333A44",
    gray: "#4f4f4f",
    white: "#fff",
    black: "#000",
  },
  fontFamilies: {
    heading: "Space Mono, monospace",
    body: "Lexend Deca, sans-serif",
  },
  fontSizes: {
    xs: ".9375rem", // 15px
    sm: "1.4rem", // 22.4px
    md: "1.6rem", // 25.6px
    lg: "2.4rem", // 38.4px
    xl: "3.6rem", // 57.6px
    xxl: "4.8rem", // 76.8px
  },
  breakpoints: {
    xs: 375,
    sm: 580,
    md: 740,
    lg: 1024,
    xl: 1440,
    "2xl": 1920,
  },
  contentPadding: {
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
  },
  maxContentWidth: "68.75rem",
};
