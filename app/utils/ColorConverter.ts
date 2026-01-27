 export function cssColorToHex(color: string): string {
  // If already hex
  if (/^#([\da-f]{3}){1,2}$/i.test(color)) return color;
  // If rgb/rgba
  const rgbMatch = color.match(/^rgb(a?)\(([^)]+)\)/);
  if (rgbMatch) {
    const parts = rgbMatch[2].split(',').map(x => parseFloat(x));
    return (
      '#' +
      parts.slice(0, 3)
        .map(x => Math.round(x).toString(16).padStart(2, '0'))
        .join('')
    );
  }
  // If lab()
  const labMatch = color.match(/^lab\(([^)]+)\)/);
  if (labMatch) {
    const parts = labMatch[1].split(/\s+/).map(x => parseFloat(x));
    if (parts.length >= 3) {
      const [l, a, b] = parts;
      const [r, g, b2] = labToRgb(l, a, b);
      return (
        '#' +
        [r, g, b2]
          .map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0'))
          .join('')
      );
    }
  }
  // If other, fallback
  return fallbackHex();
}

// Helper: convert Lab to RGB
function labToRgb(l: number, a: number, b: number): [number, number, number] {
  // Convert Lab to XYZ
  let y = (l + 16) / 116;
  let x = a / 500 + y;
  let z = y - b / 200;
  const pow = (n: number) => Math.pow(n, 3) > 0.008856 ? Math.pow(n, 3) : (n - 16 / 116) / 7.787;
  x = pow(x) * 0.95047;
  y = pow(y) * 1.00000;
  z = pow(z) * 1.08883;
  // Convert XYZ to RGB
  let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  let b2 = x * 0.0557 + y * -0.2040 + z * 1.0570;
  const gamma = (c: number) => c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;
  r = gamma(r);
  g = gamma(g);
  b2 = gamma(b2);
  return [r * 255, g * 255, b2 * 255];
    }

    function fallbackHex(): string {
      return '#000000';
    }




export function getCssVar(name: string, fallback: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return value || fallback;
  }
  return fallback;
}