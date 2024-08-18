/**
 * @param {string} hex The HEX value (e.g. #abc, #123456, 123456)
 * @param {number} alpha Optional alpha value (default is 1)
 * @returns {string} The RGB value
 */

const convertHexToRGB = (hex: string, alpha: number = 1): string => {
  // Remove the hash (#) at the start if it's there
  hex = hex.replace(/^#/, "");

  // Check if the HEX is in the 3-character format, if so convert it to the 6-character format
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(char => char + char)
      .join("");
  }

  // Ensure the HEX code is now 6 characters long
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color code");
  }

  // Convert the HEX code to RGB
  // Convert HEX to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default convertHexToRGB;
