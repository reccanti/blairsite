import { defineProperties } from "@vanilla-extract/sprinkles";
import { colorVars } from "../base.css";

const { focus: labelFocusStyles } = colorVars.borders;
const { focus: shadowFocusStyles, active: shadowActiveStyles } =
  colorVars.boxShadows.border;

export const labelFocus = {
  focusDefault: labelFocusStyles.default,
  focusLink: labelFocusStyles.link.default,
  focusLinkHover: labelFocusStyles.link.hover,
  focusLinkVisited: labelFocusStyles.link.visited.default,
  focuslinkVisitedHover: labelFocusStyles.link.visited.hover,
};

export const shadowFocus = {
  focusDefault: shadowFocusStyles.default,
  focusMagenta: shadowFocusStyles.magenta,
  focusGreen: shadowFocusStyles.green,
  focusBlue: shadowFocusStyles.blue,
  focusRed: shadowFocusStyles.red,
  focusYellow: shadowFocusStyles.yellow,
  focusGray1: shadowFocusStyles.gray1,
  focusGray2: shadowFocusStyles.gray2,
  focusInverted: shadowFocusStyles.inverted,
  focusHoverDefault: shadowFocusStyles.hover.default,
  focusHoverMagenta: shadowFocusStyles.hover.magenta,
  focusHoverGreen: shadowFocusStyles.hover.green,
  focusHoverBlue: shadowFocusStyles.hover.blue,
  focusHoverRed: shadowFocusStyles.hover.red,
  focusHoverYellow: shadowFocusStyles.hover.yellow,
  focusHoverGray1: shadowFocusStyles.hover.gray1,
  focusHoverGray2: shadowFocusStyles.hover.gray2,
  focusHoverInverted: shadowFocusStyles.hover.inverted,
};

export const shadowActive = {
  activeDefault: shadowActiveStyles.default,
  activeMagenta: shadowActiveStyles.magenta,
  activeGreen: shadowActiveStyles.green,
  activeBlue: shadowActiveStyles.blue,
  activeRed: shadowActiveStyles.red,
  activeYellow: shadowActiveStyles.yellow,
  activeGray1: shadowActiveStyles.gray1,
  activeGray2: shadowActiveStyles.gray2,
  activeInverted: shadowActiveStyles.inverted,
};

export const shadows = {
  ...shadowFocus,
  ...shadowActive,
};

export const focusProperties = defineProperties({
  properties: {
    border: labelFocus,
    boxShadow: shadows,
  },
});
