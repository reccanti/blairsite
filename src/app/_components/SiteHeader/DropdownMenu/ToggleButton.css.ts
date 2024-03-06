import { style } from "@vanilla-extract/css";
import { sprinkles } from "@/themes/sprinkles.css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import { beforeTabletQuery } from "@/themes/utlities/breakpoints.css";
import { dropdown } from "./DropdownMenu.css";

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
