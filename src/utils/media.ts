import { css, CSSObject, Interpolation } from "styled-components";

const breakpoints: Record<string, number> = {
  xs: 375,
  sm: 580,
  md: 740,
  lg: 1024,
  xl: 1440,
  "2xl": 1920,
};

const pxToEm = (px: number) => `${px / 16}em`;

const errorOut = (size: string, mediaQuery: string) => {
  console.error(
    `${size} is not a valid breakpoint for ${mediaQuery} media query.`
  );
  return;
};

// prettier-ignore
export const media = {
  min:
    (size: string) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: Interpolation<object>[]
    ) => {
      const min = breakpoints[size] ? pxToEm(breakpoints[size]) : pxToEm(Number(size));

      // if size is 0em or NaN, log an error
      if (min === "0em" || (!breakpoints[size] && isNaN(Number(size)))) {
        errorOut(size, "min-width");
      } else {
        return css`
        @media (min-width: ${min}) {
          ${css(first, ...interpolations)}
        }
      `}
  },
  max:
    (size: string) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: Interpolation<object>[]
    ) => {
      const reducedSize = breakpoints[size] ? breakpoints[size] - 1 : Number(size) - 1;
      const max = pxToEm(reducedSize);

      // if size is NaN, log an error
      if (!breakpoints[size] && isNaN(Number(size))) {
        errorOut(size, "max-width");
      } else {
      return css`
        @media (max-width: ${max}) {
          ${css(first, ...interpolations)}
        }
      `;}
  },
  between:
    (minSize: string, maxSize: string) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: Interpolation<object>[]
    ) => {
      const min = breakpoints[minSize] ? pxToEm(breakpoints[minSize]) : pxToEm(Number(minSize));
      const max = breakpoints[maxSize] ? pxToEm(breakpoints[maxSize]) : pxToEm(Number(maxSize));

      // if min or max size is Nan, log an error
      if ((!breakpoints[minSize] && isNaN(Number(minSize))) || (!breakpoints[maxSize] && isNaN(Number(maxSize)))) {
        errorOut(isNaN(Number(minSize)) ? minSize : maxSize, "between");
      } else {
        return css`
          @media (min-width: ${min}) and (max-width: ${max}) {
            ${css(first, ...interpolations)}
          }
        `}
  },
};
