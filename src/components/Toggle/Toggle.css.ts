import { labelDefaultColors } from "@/themes/sprinkles/colors.css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import { style } from "@vanilla-extract/css";

export const toggle = style({
  color: labelDefaultColors["labelContextualDefault"],
  display: "inline-flex",
  alignItems: "center",
});

export const toggleLabel = style({
  ...visuallyHiddenProperties,
});
