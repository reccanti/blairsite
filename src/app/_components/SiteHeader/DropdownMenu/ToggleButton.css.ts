import { style, globalStyle } from "@vanilla-extract/css";
import { sprinkles } from "@/themes/sprinkles.css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import {
  beforeTabletQuery,
  tabletQuery,
} from "@/themes/utlities/breakpoints.css";
import { dropdown } from "./DropdownMenu.css";

// export const iconLabel = style({
//   ...visuallyHiddenProperties,
//   "@media": {
//     [tabletSize]: {
//       all: "initial",
//     },
//   },
// });

export const toggleButton = style([
  sprinkles({ padding: "spacing1" }),
  {
    display: "flex",
    height: "100%",
  },
]);

export const closeButton = style({
  display: "none",
  selectors: {
    [`.${dropdown}:focus-within &`]: {
      display: "inline",
    },
  },
});
export const normalButton = style({
  display: "none",
  selectors: {
    [`.${dropdown}:not(:focus-within) &`]: {
      display: "inline",
    },
  },
});

export const toggleButtonLabel = style({
  "@media": {
    [beforeTabletQuery]: {
      ...visuallyHiddenProperties,
      height: "auto",
    },
  },
});
