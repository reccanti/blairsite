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

const baseColorProperties = defineProperties({
  properties: {
    backgroundColor: baseColors,
    color: baseColors,
    borderColor: baseColors,
  },
});

export const sprinkles = createSprinkles(baseColorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
