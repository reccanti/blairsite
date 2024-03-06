import { style, globalStyle } from "@vanilla-extract/css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";

export const item = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  width: "auto",
  height: "auto",
  right: 0,
});

export const dropdown = style({
  position: "relative",
});

/**
 * Visually hidden styles. This way, the menu won't show up unless
 */
globalStyle(`.${dropdown}:not(:focus-within) .${menu}`, {
  ...visuallyHiddenProperties,
});
