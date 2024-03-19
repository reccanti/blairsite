import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../themes/sprinkles.css";
import {
  labelDefaultColors,
  labelInactiveColors,
  semanticColorKeymap,
} from "../..//themes/sprinkles/colors.css";

const colorVariants = styleVariants(semanticColorKeymap, (v, color) => [
  sprinkles({ backgroundColor: `background${color}`, color: `label${color}` }),
  {
    // set contextual colors
    vars: {
      [labelDefaultColors["labelContextualDefault"]]:
        labelDefaultColors[`label${color}`],
      [labelInactiveColors["labelInactiveContextualDefault"]]:
        labelInactiveColors[`labelInactive${color}`],
    },
  },
]);

export const tile = recipe({
  variants: {
    hasPadding: {
      true: sprinkles({ padding: "spacing3" }),
    },
    color: colorVariants,
  },
});
