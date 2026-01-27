// utils/lottieColorChanger.ts

interface ColorMap {
  [key: string]: string; // { 'oldColor': 'newColor' }
}

/**
 * Replace colors in Lottie animation JSON
 * @param animationData - Original Lottie JSON
 * @param colorMap - Object mapping old colors to new colors (hex format)
 * @returns Modified animation data
 */


export function changeLottieColors(
  animationData: Record<string, unknown>,
  colorMap: ColorMap,
): Record<string, unknown> {
  // Deep clone to avoid mutating original
  const data = JSON.parse(JSON.stringify(animationData));

  // Convert hex to RGB array (0-1 range for Lottie)
  const hexToRgbArray = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [0, 0, 0, 1];

    return [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255,
      1,
    ];
  };

  // Convert RGB array to hex for comparison
  const rgbArrayToHex = (rgb: number[]): string => {
    const r = Math.round(rgb[0] * 255);
    const g = Math.round(rgb[1] * 255);
    const b = Math.round(rgb[2] * 255);
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  };

  // Recursive function to find and replace colors
  const replaceColors = (obj: Record<string, unknown>) => {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Check if this is a color property
        if (key === "c" || key === "s") {
          const colorObj = obj[key] as { k?: unknown };
          if (colorObj.k && Array.isArray(colorObj.k)) {
            const currentColor = rgbArrayToHex(colorObj.k as number[]);

            // Check if this color should be replaced
            for (const oldColor in colorMap) {
              const normalizedOld = oldColor.toLowerCase();
              const normalizedCurrent = currentColor.toLowerCase();

              if (normalizedOld === normalizedCurrent) {
                (colorObj.k as number[]) = hexToRgbArray(colorMap[oldColor]);
                break;
              }
            }
          }
        }

        // Recursively process nested objects
        replaceColors(obj[key] as Record<string, unknown>);
      }
    }
  };

  replaceColors(data);
  return data;
}

/**
 * Replace all colors in animation with new colors
 * @param animationData - Original Lottie JSON
 * @param newColors - Array of hex colors to use
 * @returns Modified animation data
 */
export function replaceAllColors(animationData: Record<string, unknown>, newColors: string[]): Record<string, unknown> {
  const data = JSON.parse(JSON.stringify(animationData));
  let colorIndex = 0;

  const hexToRgbArray = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [0, 0, 0, 1];

    return [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255,
      1,
    ];
  };

  const replaceColors = (obj: Record<string, unknown>) => {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (
          (key === "c" || key === "s") &&
          (obj[key] as { k?: unknown }).k &&
          Array.isArray((obj[key] as { k: unknown[] }).k)
        ) {
          if (colorIndex < newColors.length) {
            (obj[key] as { k: number[] }).k = hexToRgbArray(newColors[colorIndex]);
            colorIndex++;
          }
        }
        replaceColors(obj[key] as Record<string, unknown>);
      }
    }
  };

  replaceColors(data);
  return data;
}

/**
 * Extract all colors from a Lottie animation
 * @param animationData - Lottie JSON
 * @returns Array of hex colors found in the animation
 */
export function extractLottieColors(animationData: Record<string, unknown>): string[] {
  const colors = new Set<string>();

  const rgbArrayToHex = (rgb: number[]): string => {
    const r = Math.round(rgb[0] * 255);
    const g = Math.round(rgb[1] * 255);
    const b = Math.round(rgb[2] * 255);
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  };

  const findColors = (obj: Record<string, unknown>) => {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (
          (key === "c" || key === "s") &&
          (obj[key] as { k?: unknown }).k &&
          Array.isArray((obj[key] as { k: unknown[] }).k)
        ) {
          colors.add(rgbArrayToHex((obj[key] as { k: number[] }).k));
        }
        findColors(obj[key] as Record<string, unknown>);
      }
    }
  };

  findColors(animationData);
  return Array.from(colors);
}
