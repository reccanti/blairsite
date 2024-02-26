import { sprinkles } from "../../themes/sprinkles.css";
import { labelHighlightColors } from "../../themes/sprinkles/colors.css";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const highlight = recipe({
  variants: {
    color: styleVariants(labelHighlightColors, (v, highlight) => [
      sprinkles({ color: highlight }),
    ]),
  },
});
