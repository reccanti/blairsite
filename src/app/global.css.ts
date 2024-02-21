import {
  createGlobalTheme,
  createGlobalThemeContract,
  fontFace,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";
import oleoRegular from "@/../public/fonts/Oleo_Script/OleoScript-Regular.ttf";
import oleoBold from "@/../public/fonts/Oleo_Script/OleoScript-Bold.ttf";
import { createTheme } from "@/themes/utils";

// themes
import lightJson from "../themes/compiled/light.json";
import darkJson from "../themes/compiled/dark.json";
import highContrast from "../themes/compiled/highContrast.json";
import highContrastDark from "../themes/compiled/highContrast.dark.json";
import lightSimpleJson from "../themes/compiled/light.simple.json";
import darkSimpleJson from "../themes/compiled/dark.simple.json";
import highContrastSimpleJson from "../themes/compiled/highContrast.simple.json";
import highContrastDarkSimpleJson from "../themes/compiled/highContrast.dark.simple.json";
import lightLargeScreenJson from "../themes/compiled/light.json";
import darkLargeScreenJson from "../themes/compiled/light.json";
import highContrastLargeScreenJson from "../themes/compiled/light.json";
import highContrastDarkLargeScreenJson from "../themes/compiled/light.json";
import lightJson from "../themes/compiled/light.json";
import lightJson from "../themes/compiled/light.json";
import lightJson from "../themes/compiled/light.json";
import lightJson from "../themes/compiled/light.json";

const oleo = "Oleo Script";
globalFontFace(oleo, {
  src: `url("${oleoRegular}")`,
  fontWeight: "normal",
});
globalFontFace(oleo, {
  src: `url("${oleoBold}")`,
  fontWeight: "bold",
});

createGlobalTheme(".light", createTheme(lightJson));
