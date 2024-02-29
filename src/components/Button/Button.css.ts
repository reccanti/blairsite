import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../themes/sprinkles.css";
import { backgroundHoverColors } from "../../themes/sprinkles/colors.css";
import { shadowFocus, shadowActive } from "../../themes/sprinkles/focus.css";

export const colorVariants = {
  Default: "",
  Magenta: "",
  Green: "",
  Blue: "",
  Red: "",
  Yellow: "",
  Gray1: "",
  Gray2: "",
  Inverted: "",
};

const variants = styleVariants(colorVariants, (v, color) => [
  sprinkles({ color: `label${color}`, backgroundColor: `background${color}` }),
  {
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
  },
]);

export const button = recipe({
  base: [
    sprinkles({ padding: "spacing2", typography: "uiType" }),
    {
      display: "inline-block",
    },
  ],
  variants: {
    color: variants,
  },
});
