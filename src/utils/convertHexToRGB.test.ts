import convertHexToRGB from "./convertHextoRGB";

describe("convertHexToRGB", () => {
  it("should convert hex to RGB", () => {
    expect(convertHexToRGB("#abc")).toEqual("rgba(170, 187, 204, 1)");
    expect(convertHexToRGB("#abc123")).toEqual("rgba(171, 193, 35, 1)");
    expect(convertHexToRGB("abc123")).toEqual("rgba(171, 193, 35, 1)");
    expect(convertHexToRGB("999", 0.5)).toEqual("rgba(153, 153, 153, 0.5)");
  });

  it("should throw an error for invalid hex", () => {
    expect(() => convertHexToRGB("#11")).toThrow("Invalid HEX color code");
    expect(() => convertHexToRGB("#12345", 0.2)).toThrow(
      "Invalid HEX color code"
    );
    expect(() => convertHexToRGB("#1234567")).toThrow("Invalid HEX color code");
  });
});
