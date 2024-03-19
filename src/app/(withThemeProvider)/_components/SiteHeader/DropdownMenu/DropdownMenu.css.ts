import { style, globalStyle } from "@vanilla-extract/css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import { tabletQuery } from "@/themes/utlities/breakpoints.css";

export const item = style({
  display: "flex",
  width: "100%",
  flex: 1,
  justifyContent: "flex-end",
  "@media": {
    [tabletQuery]: {
      width: "max-content",
    },
  },
});

export const itemButton = style({
  flex: 1,
  justifyContent: "flex-end",
});

export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  width: "100%",
  minHeight: "60vh",
  height: "auto",
  right: 0,
  "@media": {
    [tabletQuery]: {
      width: "auto",
      minHeight: "auto",
    },
  },
});

export const toggleWrapper = style({
  display: "flex",
  flex: 1,
});

export const dropdown = style({
  "@media": {
    [tabletQuery]: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  },
});

/**
 * Visually hidden styles. This way, the menu won't show up unless
 */
globalStyle(`.${dropdown}:not(:focus-within) .${menu}`, {
  ...visuallyHiddenProperties,
});
