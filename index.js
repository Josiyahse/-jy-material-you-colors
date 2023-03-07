function generateMaterialYouColors(hexColor) {
  const color = hexToRgb(hexColor);

  const shadeColor = (percent, alpha = 1) => {
    const factor = percent / 100;
    const r = Math.floor(color.r * (1 + factor));
    const g = Math.floor(color.g * (1 + factor));
    const b = Math.floor(color.b * (1 + factor));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  function hexToRgb(hexColor) {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
  }
  return {
    primary: `rgb(${color.r}, ${color.g}, ${color.b})`,
    primaryContainer: shadeColor(-10),
    secondary: shadeColor(25),
    secondaryContainer: shadeColor(15),
    tertiary: shadeColor(60),
    tertiaryContainer: shadeColor(50),
    surface: "rgb(255, 255, 255)",
    surfaceVariant: shadeColor(-5),
    surfaceDisabled: `rgba(${color.r}, ${color.g}, ${color.b}, 0.12)`,
    background: "rgb(242, 242, 242)",
    error: "rgb(211, 47, 47)",
    errorContainer: shadeColor(-10, 0.12),
    onPrimary: "rgb(255, 255, 255)",
    onPrimaryContainer: "rgb(255, 255, 255)",
    onSecondary: "rgb(0, 0, 0)",
    onSecondaryContainer: "rgb(0, 0, 0)",
    onTertiary: "rgb(0, 0, 0)",
    onTertiaryContainer: "rgb(0, 0, 0)",
    onSurface: "rgb(0, 0, 0)",
    onSurfaceVariant: "rgb(0, 0, 0)",
    onSurfaceDisabled: "rgba(0, 0, 0, 0.38)",
    onError: "rgb(255, 255, 255)",
    onErrorContainer: "rgba(255, 255, 255, 0.12)",
    onBackground: "rgb(0, 0, 0)",
    outline: shadeColor(-30),
    shadow: "rgba(0, 0, 0, 0.24)",
    inverseOnSurface: "rgb(255, 255, 255)",
    inverseSurface: "rgb(0, 0, 0)",
    inversePrimary: `rgb(${color.r}, ${color.g}, ${color.b})`,
    backdrop: "rgba(0, 0, 0, 0.5)",
    elevation: {
      level0: "rgba(0, 0, 0, 0.05)",
      level1: "rgba(0, 0, 0, 0.07)",
      level2: "rgba(0, 0, 0, 0.08)",
      level3: "rgba(0, 0, 0, 0.09)",
      level4: "rgba(0, 0, 0, 0.1)",
      level5: "rgba(0, 0, 0, 0.11)",
    },
  };
}

module.exports = generateMaterialYouColors;
