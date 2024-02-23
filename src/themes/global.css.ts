import {
  assignVars,
  createGlobalTheme,
  createThemeContract,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

// fonts
import oleoRegular from "../../public/fonts/Oleo_Script/OleoScript-Regular.ttf";
import oleoBold from "../../public/fonts/Oleo_Script/OleoScript-Bold.ttf";

import ubuntuLight from "../../public/fonts/Ubuntu/Ubuntu-Light.ttf";
import ubuntuLightItalic from "../../public/fonts/Ubuntu/Ubuntu-LightItalic.ttf";
import ubuntuRegular from "../../public/fonts/Ubuntu/Ubuntu-Regular.ttf";
import ubuntuItalic from "../../public/fonts/Ubuntu/Ubuntu-Italic.ttf";
import ubuntuMedium from "../../public/fonts/Ubuntu/Ubuntu-Medium.ttf";
import ubuntuMediumItalic from "../../public/fonts/Ubuntu/Ubuntu-MediumItalic.ttf";
import ubuntuBold from "../../public/fonts/Ubuntu/Ubuntu-Bold.ttf";
import ubuntuBoldItalic from "../../public/fonts/Ubuntu/Ubuntu-BoldItalic.ttf";

// themes
import lightJson from "../tokens/compiled/light.json";
import darkJson from "../tokens/compiled/dark.json";
import highContrastJson from "../tokens/compiled/highContrast.json";
import highContrastDarkJson from "../tokens/compiled/highContrastDark.json";
import fontsJson from "../tokens/compiled/fonts.json";
import fontsLargeScreenJson from "../tokens/compiled/fontsLargeScreen.json";
import fontsSimple from "../tokens/compiled/fontsSimple.json";
import fontsLargeScreenSimple from "../tokens/compiled/fontsLargeScreenSimple.json";

// theme contracts
import colorThemeContract from "../tokens/compiled/colorThemeContract.json";
import fontsThemeContract from "../tokens/compiled/fontsThemeContract.json";

const oleo = "Oleo Script";
globalFontFace(oleo, {
  src: `url("${oleoRegular}")`,
  fontWeight: "normal",
});
globalFontFace(oleo, {
  src: `url("${oleoBold}")`,
  fontWeight: "bold",
});

const ubuntu = "Ubuntu";
globalFontFace(ubuntu, {
  src: `url("${ubuntuLight}")`,
  fontWeight: "300",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuLightItalic}")`,
  fontWeight: "300",
  fontStyle: "italic",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuRegular}")`,
  fontWeight: "400",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuItalic}")`,
  fontWeight: "400",
  fontStyle: "italic",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuMedium}")`,
  fontWeight: "500",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuMediumItalic}")`,
  fontWeight: "500",
  fontStyle: "italic",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuBold}")`,
  fontWeight: "700",
});
globalFontFace(ubuntu, {
  src: `url("${ubuntuBoldItalic}")`,
  fontWeight: "700",
  fontStyle: "italic",
});

/**
 * Create a color theme contract based on the "light" theme, which is the
 * default
 */
export const colorVars = createThemeContract(colorThemeContract);

/**
 * Create a font theme contract based on the "fonts" theme, which is the default
 */
export const fontVars = createThemeContract(fontsThemeContract);

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

createGlobalTheme(`.${fontsClass}`, fontVars, fontsJson);
createGlobalTheme(`.${fontsLargeScreenClass}`, fontVars, fontsLargeScreenJson);
createGlobalTheme(`.${fontsSimpleClass}`, fontVars, fontsSimple);
createGlobalTheme(
  `.${fontsLargeScreenSimple}`,
  fontVars,
  fontsLargeScreenSimple
);

// default themes based on preferences

globalStyle("html", {
  vars: assignVars(fontVars, fontsJson),
  "@media": {
    "(prefers-color-scheme: light)": {
      vars: assignVars(colorVars, lightJson),
    },
    "(prefers-color-scheme: dark)": {
      vars: assignVars(colorVars, darkJson),
    },
    "(min-width: 744px)": {
      vars: assignVars(fontVars, fontsLargeScreenJson),
    },
  },
});

globalStyle(":root", {
  backgroundColor: colorVars.colors.background.default,
  color: colorVars.colors.label.default,
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: fontVars.fontSizes.fontSizes.body,
});

globalStyle("a", {
  color: colorVars.colors.label.link.default,
});
globalStyle("a:hover", {
  color: colorVars.colors.label.link.hover,
});
globalStyle("a:visited", {
  color: colorVars.colors.label.link.visited.default,
});
globalStyle("a:visited:hover", {
  color: colorVars.colors.label.link.visited.hover,
});
