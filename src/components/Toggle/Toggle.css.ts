import { labelDefaultColors } from "@/themes/sprinkles/colors.css";
import { style } from "@vanilla-extract/css";

export const toggle = style({
  color: labelDefaultColors["labelDefault"],
  display: "inline-flex",
  alignItems: "center",
});
