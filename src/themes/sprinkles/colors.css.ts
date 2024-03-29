import { defineProperties } from "@vanilla-extract/sprinkles";
import { colorVars, simpleClass } from "../base.css";
import { themeRootClass } from "@/components/ThemeProvider/ThemeProvider.css";

// base colors

const { black, white, magenta, blue, green, red, yellow, gray } =
  colorVars.colors.base;

export const baseBlack = black;
export const baseWhite = white;

export const baseMagenta = {
  baseMagenta1: magenta["1"],
  baseMagenta2: magenta["2"],
  baseMagenta3: magenta["3"],
  baseMagenta4: magenta["4"],
  baseMagenta5: magenta["5"],
  baseMagenta6: magenta["6"],
};

export const baseGreen = {
  baseGreen1: green["1"],
  baseGreen2: green["2"],
  baseGreen3: green["3"],
  baseGreen4: green["4"],
  baseGreen5: green["5"],
  baseGreen6: green["6"],
};

export const baseBlue = {
  baseBlue1: blue["1"],
  baseBlue2: blue["2"],
  baseBlue3: blue["3"],
  baseBlue4: blue["4"],
  baseBlue5: blue["5"],
  baseBlue6: blue["6"],
};

export const baseRed = {
  baseRed1: red["1"],
  baseRed2: red["2"],
  baseRed3: red["3"],
  baseRed4: red["4"],
  baseRed5: red["5"],
  baseRed6: red["6"],
};

export const baseYellow = {
  baseYellow1: yellow["1"],
  baseYellow2: yellow["2"],
  baseYellow3: yellow["3"],
  baseYellow4: yellow["4"],
  baseYellow5: yellow["5"],
  baseYellow6: yellow["6"],
};

export const baseGray = {
  baseGray1: gray["1"],
  baseGray2: gray["2"],
  baseGray3: gray["3"],
  baseGray4: gray["4"],
  baseGray5: gray["5"],
  baseGray6: gray["6"],
  baseGray7: gray["7"],
  baseGray8: gray["8"],
  baseGray9: gray["9"],
  baseGray10: gray["10"],
  baseGray11: gray["11"],
  baseGray12: gray["12"],
};

export const baseColors = {
  baseBlack,
  baseWhite,
  ...baseMagenta,
  ...baseGreen,
  ...baseBlue,
  ...baseRed,
  ...baseYellow,
  ...baseGray,
};

// overlay

export const overlay = colorVars.colors.overlay;

// semantic colors

// we have all sorts of semantic colors where the values are similar, but the
// shade can change depending on the context. This keymap is useful for
// generating some of these styles

export const semanticColorKeymap = {
  Default: "",
  Magenta: "",
  Green: "",
  Blue: "",
  Red: "",
  Yellow: "",
  Gray1: "",
  Gray2: "",
  Inverted: "",
};

const {
  default: backgroundDefault,
  magenta: backgroundMagenta,
  green: backgroundGreen,
  blue: backgroundBlue,
  red: backgroundRed,
  yellow: backgroundYellow,
  gray1: backgroundGray1,
  gray2: backgroundGray2,
  inverted: backgroundInverted,
} = colorVars.colors.background;

export const backgroundDefaultColors = {
  backgroundDefault,
  backgroundMagenta,
  backgroundGreen,
  backgroundBlue,
  backgroundRed,
  backgroundYellow,
  backgroundGray1,
  backgroundGray2,
  backgroundInverted,
  // the contextual default can be overridden so that the color can
  // automatically change depending on where it's used (like parent background
  // color)
  backgroundContextualDefault: backgroundDefault,
};

const {
  default: backgroundHoverDefault,
  magenta: backgroundHoverMagenta,
  green: backgroundHoverGreen,
  blue: backgroundHoverBlue,
  red: backgroundHoverRed,
  yellow: backgroundHoverYellow,
  gray1: backgroundHoverGray1,
  gray2: backgroundHoverGray2,
  inverted: backgroundHoverInverted,
} = colorVars.colors.background.hover;

export const backgroundHoverColors = {
  backgroundHoverDefault,
  backgroundHoverMagenta,
  backgroundHoverGreen,
  backgroundHoverBlue,
  backgroundHoverRed,
  backgroundHoverYellow,
  backgroundHoverGray1,
  backgroundHoverGray2,
  backgroundHoverInverted,
};

const {
  default: labelDefault,
  magenta: labelMagenta,
  green: labelGreen,
  blue: labelBlue,
  red: labelRed,
  yellow: labelYellow,
  gray1: labelGray1,
  gray2: labelGray2,
  inverted: labelInverted,
  white: labelWhite,
} = colorVars.colors.label;

export const labelDefaultColors = {
  labelDefault,
  labelMagenta,
  labelGreen,
  labelBlue,
  labelRed,
  labelYellow,
  labelWhite,
  labelGray1,
  labelGray2,
  labelInverted,
  // the contextual default can be overridden so that the color can
  // automatically change depending on where it's used (like parent background
  // color)
  labelContextualDefault: labelDefault,
};

const {
  default: labelInactiveDefault,
  magenta: labelInactiveMagenta,
  green: labelInactiveGreen,
  blue: labelInactiveBlue,
  red: labelInactiveRed,
  yellow: labelInactiveYellow,
  inverted: labelInactiveInverted,
  white: labelInactiveWhite,
} = colorVars.colors.label.inactive;

export const labelInactiveColors = {
  labelInactiveDefault,
  labelInactiveMagenta,
  labelInactiveGreen,
  labelInactiveBlue,
  labelInactiveRed,
  labelInactiveYellow,
  labelInactiveWhite,
  // adding these two as aliases to labelWhite to make generating styles easier
  labelInactiveGray1: labelInactiveWhite,
  labelInactiveGray2: labelInactiveWhite,
  labelInactiveInverted,
  // the contextual default can be overridden so that the color can
  // automatically change depending on where it's used (like parent background
  // color)
  labelInactiveContextualDefault: labelInactiveDefault,
};

const {
  magenta: labelHighlightMagenta,
  green: labelHighlightGreen,
  blue: labelHighlightBlue,
  red: labelHighlightRed,
  yellow: labelHighlightYellow,
} = colorVars.colors.label.highlight;

export const labelHighlightColors = {
  labelHighlightMagenta,
  labelHighlightGreen,
  labelHighlightBlue,
  labelHighlightRed,
  labelHighlightYellow,
};

const { default: labelLinkDefault, hover: labelLinkHover } =
  colorVars.colors.label.link;

export const labelLinkColors = {
  labelLinkDefault,
  labelLinkHover,
};

const { default: labelLinkVisitedDefault, hover: labelLinkVisitedHover } =
  colorVars.colors.label.link.visited;

export const labelLinkVisitedColors = {
  labelLinkVisitedDefault,
  labelLinkVisitedHover,
};

export const semanticColors = {
  ...backgroundDefaultColors,
  ...backgroundHoverColors,
  ...labelDefaultColors,
  ...labelInactiveColors,
  ...labelHighlightColors,
  ...labelLinkColors,
  ...labelLinkVisitedColors,
};

// export all colors

export const colors = {
  ...baseColors,
  ...semanticColors,
};

// define all Sprinkles properties

export const backgroundColors = {
  ...baseColors,
  ...backgroundDefaultColors,
  ...backgroundHoverColors,
};

export const backgroundColorProperties = defineProperties({
  properties: {
    backgroundColor: backgroundColors,
  },
});

export const labelColors = {
  ...baseColors,
  ...labelDefaultColors,
  ...labelInactiveColors,
  ...labelHighlightColors,
  ...labelLinkColors,
  ...labelLinkVisitedColors,
};

export const labelColorProperties = defineProperties({
  properties: {
    color: labelColors,
  },
});
