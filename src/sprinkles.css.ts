import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { colorVars } from "./global.css";

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

// semantic colors

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
  white: labelGray1,
  inverted: labelInverted,
} = colorVars.colors.label;

export const labelDefaultColors = {
  labelDefault,
  labelMagenta,
  labelGreen,
  labelBlue,
  labelRed,
  labelYellow,
  labelGray1,
  labelInverted,
};

const {
  default: labelInactiveDefault,
  magenta: labelInactiveMagenta,
  green: labelInactiveGreen,
  blue: labelInactiveBlue,
  red: labelInactiveRed,
  yellow: labelInactiveYellow,
  white: labelInactiveGray1,
  inverted: labelInactiveInverted,
} = colorVars.colors.label.inactive;

export const labelInactiveColors = {
  labelInactiveDefault,
  labelInactiveMagenta,
  labelInactiveGreen,
  labelInactiveBlue,
  labelInactiveRed,
  labelInactiveYellow,
  labelInactiveGray1,
  labelInactiveInverted,
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

const backgroundColorProperties = defineProperties({
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

const labelColorProperties = defineProperties({
  properties: {
    color: labelColors,
  },
});

export const sprinkles = createSprinkles(
  backgroundColorProperties,
  labelColorProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
