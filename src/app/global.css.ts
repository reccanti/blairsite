import { fontFace, globalFontFace, globalStyle } from "@vanilla-extract/css";
import lightJson from "../themes/light.json";
import oleoRegular from "@/../public/fonts/Oleo_Script/OleoScript-Regular.ttf";
import oleoBold from "@/../public/fonts/Oleo_Script/OleoScript-Bold.ttf";

const oleo = "Oleo Script";
globalFontFace(oleo, {
  src: `url("${oleoRegular}")`,
  fontWeight: "normal",
});
globalFontFace(oleo, {
  src: `url("${oleoBold}")`,
  fontWeight: "bold",
});
