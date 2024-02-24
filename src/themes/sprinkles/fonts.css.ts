import { defineProperties } from "@vanilla-extract/sprinkles";
import { fontVars } from "../base.css";

// attempt to mimic Token Studio's "Typography" token, which combines the
// features of CSS's `font` and `textDecoration

const { body, header } = fontVars.typographies;

export const typeFonts = {
  bodyType: body.font,
  header1Type: header["1"].font,
  header2Type: header["2"].font,
  header3Type: header["3"].font,
  header4Type: header["4"].font,
  header5Type: header["5"].font,
  header6Type: header["6"].font,
};

export const typeDecorations = {
  bodyType: body.textDecoration,
  header1Type: header["1"].textDecoration,
  header2Type: header["2"].textDecoration,
  header3Type: header["3"].textDecoration,
  header4Type: header["4"].textDecoration,
  header5Type: header["5"].textDecoration,
  header6Type: header["6"].textDecoration,
};

// export const typeShorthands = {
//   typeography: ["font", "textDecoration"],
// };

export const typographyProperties = defineProperties({
  properties: {
    font: typeFonts,
    textDecoration: typeDecorations,
  },
  shorthands: {
    typography: ["font", "textDecoration"],
  },
});
