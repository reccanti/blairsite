import { recipe } from "@vanilla-extract/recipes";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../themes/sprinkles.css";
import {
  backgroundHoverColors,
  labelDefaultColors,
} from "../../themes/sprinkles/colors.css";
import { shadowFocus, shadowActive } from "../../themes/sprinkles/focus.css";
import { typeFonts } from "../../themes/sprinkles/fonts.css";

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
    // color: labelDefaultColors[`label${color}`],
    // font: typeFonts[`uiType`],
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
