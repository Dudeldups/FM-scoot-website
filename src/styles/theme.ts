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
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "3.6rem",
    xxl: "4.8rem",
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
    sm: "1.5rem",
    md: "2.5rem",
    lg: "3rem",
  },
  maxContentWidth: "68.75rem",
};
