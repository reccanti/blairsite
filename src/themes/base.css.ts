import {
  createGlobalTheme,
  createThemeContract,
  globalFontFace,
  assignVars,
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
import fontsPrintJson from "../tokens/compiled/fontsPrint.json";
import fontsLargeScreenJson from "../tokens/compiled/fontsLargeScreen.json";
import fontsSimple from "../tokens/compiled/fontsSimple.json";
import fontsLargeScreenSimple from "../tokens/compiled/fontsLargeScreenSimple.json";

// theme contracts
import colorThemeContract from "../tokens/compiled/colorThemeContract.json";
import fontsThemeContract from "../tokens/compiled/fontsThemeContract.json";
import { themeRootClass } from "../components/ThemeProvider/ThemeProvider.css";
import { tabletQuery } from "./utlities/breakpoints.css";

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
export const fontsClass = "fonts";
export const fontsLargeScreenClass = "fontsLargeScreen";
export const simpleClass = "simple";
export const reducedMotionClass = "reduceMotion";

createGlobalTheme(`.${themeRootClass}.${lightClass}`, colorVars, lightJson);
createGlobalTheme(`.${themeRootClass}.${darkClass}`, colorVars, darkJson);
createGlobalTheme(
  `.${themeRootClass}.${highContrastClass}`,
  colorVars,
  highContrastJson
);
createGlobalTheme(
  `.${themeRootClass}.${highContrastClass}.${darkClass}`,
  colorVars,
  highContrastDarkJson
);

createGlobalTheme(
  `.${themeRootClass}.${fontsClass}:not(.${simpleClass})`,
  fontVars,
  fontsJson
);
createGlobalTheme(
  `.${themeRootClass}.${fontsLargeScreenClass}:not(.${simpleClass})`,
  fontVars,
  fontsLargeScreenJson
);
createGlobalTheme(`.${themeRootClass}.${simpleClass}`, fontVars, fontsSimple);
createGlobalTheme(
  `.${themeRootClass}.${fontsLargeScreenClass}.${simpleClass}`,
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
    [tabletQuery]: {
      vars: assignVars(fontVars, fontsLargeScreenJson),
    },
    print: {
      vars: assignVars(
        { ...colorVars, ...fontVars },
        { ...highContrastJson, ...fontsPrintJson }
      ),
    },
  },
});

globalStyle(`.${themeRootClass}.${simpleClass}`, {
  "@media": {
    [tabletQuery]: {
      vars: assignVars(fontVars, fontsLargeScreenSimple),
    },
  },
});

globalStyle(`html :not(.${darkClass}).${highContrastClass}`, {
  "@media": {
    "(prefers-color-scheme: light)": {
      vars: assignVars(colorVars, highContrastJson),
    },
  },
});

globalStyle(`html :not(.${lightClass}).${highContrastClass}`, {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(colorVars, highContrastDarkJson),
    },
  },
});
