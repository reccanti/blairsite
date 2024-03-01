import { style } from "@vanilla-extract/css";
import {
  globalDarkModeStyles,
  globalSimpleModeStyles,
} from "../utlities/themes.css";
import { labelHighlightColors } from "../sprinkles/colors.css";

// layout styles

export const simpleOnlyClass = style({
  display: "none",
  color: labelHighlightColors["labelHighlightBlue"],
});
globalSimpleModeStyles(simpleOnlyClass, {
  display: "inline",
});

// brightness styles

export const darkOnlyClass = style({
  display: "none",
  color: labelHighlightColors["labelHighlightBlue"],
});
globalDarkModeStyles(darkOnlyClass, {
  display: "inline",
});
