import { recipe } from "@vanilla-extract/recipes";
import { styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../themes/sprinkles.css";
import {
  backgroundHoverColors,
  labelDefaultColors,
  labelInactiveColors,
  semanticColorKeymap,
} from "../../themes/sprinkles/colors.css";
import { shadowFocus, shadowActive } from "../../themes/sprinkles/focus.css";

const variants = styleVariants(semanticColorKeymap, (v, color) => [
  sprinkles({ color: `label${color}`, backgroundColor: `background${color}` }),
  {
    border: "none",
    outline: "none",
    selectors: {
      "&:hover, &:focus, &:focus-within": {
        backgroundColor: backgroundHoverColors[`backgroundHover${color}`],
      },
      "&:focus, &:focus-within": {
        boxShadow: shadowFocus[`focusHover${color}`],
      },
      "&:active": {
        boxShadow: shadowActive[`active${color}`],
      },
    },
    // set contextual colors
    vars: {
      [labelDefaultColors["labelContextualDefault"]]:
        labelDefaultColors[`label${color}`],
      [labelInactiveColors["labelInactiveContextualDefault"]]:
        labelInactiveColors[`labelInactive${color}`],
    },
  },
]);

export const button = recipe({
  base: [
    {
      display: "inline-flex",
      alignItems: "center",
    },
    sprinkles({ typography: "uiType", gap: "spacing1" }),
  ],
  variants: {
    color: variants,
    hasPadding: {
      true: sprinkles({ padding: "spacing2" }),
    },
  },
});
