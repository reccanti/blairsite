import { defineProperties } from "@vanilla-extract/sprinkles";
import { fontVars } from "../base.css";
import { CSSVarFunction } from "@vanilla-extract/private";

// attempt to mimic Token Studio's "Typography" token, which combines the
// features of CSS's `font` and `textDecoration

const { body, header, link, ui } = fontVars.typographies;

// we use this contract to ensure all "typography" values can be set at once
interface TypographyContract {
  bodyType: CSSVarFunction;
  header1Type: CSSVarFunction;
  header2Type: CSSVarFunction;
  header3Type: CSSVarFunction;
  header4Type: CSSVarFunction;
  header5Type: CSSVarFunction;
  header6Type: CSSVarFunction;
  uiType: CSSVarFunction;
  linkType: CSSVarFunction;
  linkHoverType: CSSVarFunction;
}

export const typeFonts = {
  bodyType: body.font,
  header1Type: header["1"].font,
  header2Type: header["2"].font,
  header3Type: header["3"].font,
  header4Type: header["4"].font,
  header5Type: header["5"].font,
  header6Type: header["6"].font,
  uiType: ui.font,
  linkType: link.default.font,
  linkHoverType: link.hover.font,
} satisfies TypographyContract;

export const typeDecorations = {
  bodyType: body.textDecoration,
  header1Type: header["1"].textDecoration,
  header2Type: header["2"].textDecoration,
  header3Type: header["3"].textDecoration,
  header4Type: header["4"].textDecoration,
  header5Type: header["5"].textDecoration,
  header6Type: header["6"].textDecoration,
  uiType: ui.textDecoration,
  linkType: link.default.textDecoration,
  linkHoverType: link.hover.textDecoration,
} satisfies TypographyContract;

export const typeTransforms = {
  bodyType: body.textTransform,
  header1Type: header["1"].textTransform,
  header2Type: header["2"].textTransform,
  header3Type: header["3"].textTransform,
  header4Type: header["4"].textTransform,
  header5Type: header["5"].textTransform,
  header6Type: header["6"].textTransform,
  uiType: ui.textTransform,
  linkType: link.default.textTransform,
  linkHoverType: link.hover.textTransform,
} satisfies TypographyContract;

// line heights

const { lineheight: lineHeightVars } = fontVars.lineHeights;

export const lineHeights = {
  lineHeight1: lineHeightVars["1"],
  lineHeight2: lineHeightVars["2"],
  lineHeight3: lineHeightVars["3"],
};

export const typographyProperties = defineProperties({
  properties: {
    font: typeFonts,
    textDecoration: typeDecorations,
    textTransform: typeTransforms,
    lineHeight: lineHeights,
  },
  shorthands: {
    typography: ["font", "textDecoration", "textTransform"],
  },
});
