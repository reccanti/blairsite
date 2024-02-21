import {
  createGlobalTheme,
  createThemeContract,
  globalFontFace,
} from "@vanilla-extract/css";
import oleoRegular from "@/../public/fonts/Oleo_Script/OleoScript-Regular.ttf";
import oleoBold from "@/../public/fonts/Oleo_Script/OleoScript-Bold.ttf";
import { createThemeObject, createThemeContractObject } from "@/themes/utils";

// themes
import lightJson from "../themes/compiled/light.json";
import darkJson from "../themes/compiled/dark.json";
import highContrastJson from "../themes/compiled/highContrast.json";
import highContrastDarkJson from "../themes/compiled/highContrastDark.json";
import fontsJson from "../themes/compiled/fonts.json";
import fontsLargeScreenJson from "../themes/compiled/fontsLargeScreen.json";
import fontsSimple from "../themes/compiled/fontsSimple.json";
import fontsLargeScreenSimple from "../themes/compiled/fontsLargeScreenSimple.json";

const oleo = "Oleo Script";
globalFontFace(oleo, {
  src: `url("${oleoRegular}")`,
  fontWeight: "normal",
});
globalFontFace(oleo, {
  src: `url("${oleoBold}")`,
  fontWeight: "bold",
});

/**
 * Create a color theme contract based on the "light" theme, which is the
 * default
 */
export const colorTheme = createThemeContract(
  createThemeContractObject(createThemeObject(lightJson))
);

/**
 * Create a font theme contract based on the "fonts" theme, which is the default
 */
export const fontTheme = createThemeContract(
  createThemeContractObject(createThemeObject(fontsJson))
);

createGlobalTheme(".light", colorTheme, createThemeObject(lightJson));
createGlobalTheme(".dark", colorTheme, createThemeObject(darkJson));
createGlobalTheme(
  ".highContrast",
  colorTheme,
  createThemeObject(highContrastJson)
);
createGlobalTheme(
  ".highContrastDark",
  colorTheme,
  createThemeObject(highContrastDarkJson)
);
createGlobalTheme(".fonts", fontTheme, createThemeObject(fontsJson));
createGlobalTheme(
  ".fontsLargeScreen",
  fontTheme,
  createThemeObject(fontsLargeScreenJson)
);
createGlobalTheme(".fontsSimple", fontTheme, createThemeObject(fontsSimple));
createGlobalTheme(
  ".fontsLargeScreenSimple",
  createThemeObject(fontsLargeScreenSimple)
);
