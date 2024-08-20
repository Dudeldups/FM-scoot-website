import { RuleSet } from "styled-components";
import { media } from "./media";

// Utility function to strip whitespace for easier comparison
const stripWhiteSpace = (str: string) => {
  return str.replace(/\s+/g, " ").trim();
};

const ruleSetToString = (ruleSet: RuleSet<object>): string => {
  if (Array.isArray(ruleSet)) {
    return ruleSet.map(rule => String(rule)).join("");
  }
  return String(ruleSet);
};

describe("media utility", () => {
  it("should generate correct min-width media query for a given breakpoint", () => {
    const result = media.min("sm")`
      color: red;
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (min-width: 36.25em) {
          color: red;
        }
      `)
    );
  });

  it("should generate correct max-width media query for a given breakpoint", () => {
    const result = media.max("lg")`
      color: blue;
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (max-width: 63.9375em) {
          color: blue;
        }
      `)
    );
  });

  it("should generate correct between media query for given breakpoints", () => {
    const result = media.between("md", "xl")`
      background: yellow;
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (min-width: 46.25em) and (max-width: 90em) {
          background: yellow;
        }
      `)
    );
  });

  it("should generate correct min-width media query for a custom pixel value", () => {
    const result = media.min("500")`
      margin: 10px;
      background: red;
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (min-width: 31.25em) {
          margin: 10px;
          background: red;
        }
      `)
    );
  });

  it("should generate correct max-width media query for a custom pixel value", () => {
    const result = media.max("1020")`
      padding: 20px;

      &:hover {
        margin-bottom: 10px;
      }
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (max-width: 63.6875em) {
          padding: 20px;

          &:hover {
            margin-bottom: 10px;
          }
        }
      `)
    );
  });

  it("should generate correct between media query for custom pixel values", () => {
    const result = media.between("500", "1020")`
      font-size: 1.6rem;
    `;
    expect(result && stripWhiteSpace(ruleSetToString(result))).toBe(
      stripWhiteSpace(`
        @media (min-width: 31.25em) and (max-width: 63.75em) {
          font-size: 1.6rem;
        }
      `)
    );
  });
});
