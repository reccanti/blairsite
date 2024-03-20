import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import { style } from "@vanilla-extract/css";

export const skipLinkWrapper = style({
  scrollBehavior: "auto",
  selectors: {
    "&:not(:focus-within)": { ...visuallyHiddenProperties },
  },
});
