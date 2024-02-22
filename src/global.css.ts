import {
  createGlobalTheme,
  createThemeContract,
  globalFontFace,
} from "@vanilla-extract/css";
import oleoRegular from "@/../public/fonts/Oleo_Script/OleoScript-Regular.ttf";
import oleoBold from "@/../public/fonts/Oleo_Script/OleoScript-Bold.ttf";
import { createThemeObject, createThemeContractObject } from "@/themes/utils";

// themes
import lightJson from "./themes/compiled/light.json";
import darkJson from "./themes/compiled/dark.json";
import highContrastJson from "./themes/compiled/highContrast.json";
import highContrastDarkJson from "./themes/compiled/highContrastDark.json";
import fontsJson from "./themes/compiled/fonts.json";
import fontsLargeScreenJson from "./themes/compiled/fontsLargeScreen.json";
import fontsSimple from "./themes/compiled/fontsSimple.json";
import fontsLargeScreenSimple from "./themes/compiled/fontsLargeScreenSimple.json";

// theme contracts
import colorThemeContract from "./themes/compiled/colorThemeContract.json";
import fontsThemeContract from "./themes/compiled/fontsThemeContract.json";

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
export const colorVars = createThemeContract(colorThemeContract);

/**
 * Create a font theme contract based on the "fonts" theme, which is the default
 */
export const fontsTheme = createThemeContract(fontsThemeContract);

export const lightClass = "light";
export const darkClass = "dark";
export const highContrastClass = "highContrast";
export const highContrastDarkClass = "highContrastDark";
export const fontsClass = "fonts";
export const fontsLargeScreenClass = "fontsLargeScreen";
export const fontsSimpleClass = "fontsSimple";
export const fontsLargeScreenSimpleClass = "fontsLargeScreenSimple";

createGlobalTheme(`.${lightClass}`, colorVars, lightJson);
createGlobalTheme(`.${darkClass}`, colorVars, darkJson);
createGlobalTheme(`.${highContrastClass}`, colorVars, highContrastJson);
createGlobalTheme(`.${highContrastDarkClass}`, colorVars, highContrastDarkJson);

createGlobalTheme(`.${fontsClass}`, fontsTheme, fontsJson);
createGlobalTheme(
  `.${fontsLargeScreenClass}`,
  fontsTheme,
  fontsLargeScreenJson
);
createGlobalTheme(`.${fontsSimpleClass}`, fontsTheme, fontsSimple);
createGlobalTheme(
  `.${fontsLargeScreenSimple}`,
  fontsTheme,
  fontsLargeScreenSimple
);
