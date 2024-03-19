import {
  labelDefaultColors,
  labelInactiveColors,
} from "@/themes/sprinkles/colors.css";
import { spacing } from "@/themes/sprinkles/sizes.css";
import { visuallyHiddenProperties } from "@/themes/utlities/visuallyHidden.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const toggle = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
  },
  variants: {
    enabled: {
      true: {
        color: labelDefaultColors["labelContextualDefault"],
      },
      false: {
        color: labelInactiveColors["labelInactiveContextualDefault"],
      },
    },
  },
});

export const toggleLabel = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing["spacing1"],
});
