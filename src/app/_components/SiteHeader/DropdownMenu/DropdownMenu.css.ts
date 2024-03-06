import { style, globalStyle } from "@vanilla-extract/css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";

export const item = style({
  display: "flex",
  width: "100%",
  flex: 1,
  justifyContent: "flex-end",
  // width: "max-content",
});

export const itemButton = style({
  flex: 1,
  justifyContent: "flex-end",
  // width: "100%",
  // textAlign: "right",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  width: "100%",
  minHeight: "60vh",
  // height: ""
  // width: "auto%",
  height: "auto",
  right: 0,
});

export const dropdown = style({
  // position: "relative",
});

/**
 * Visually hidden styles. This way, the menu won't show up unless
 */
globalStyle(`.${dropdown}:not(:focus-within) .${menu}`, {
  ...visuallyHiddenProperties,
});
