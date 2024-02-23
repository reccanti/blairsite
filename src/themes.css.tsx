import { recipe } from "@vanilla-extract/recipes";
import { baseColors, sprinkles } from "./sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const swatchVariants = styleVariants(baseColors, (v, k) => [
  sprinkles({ backgroundColor: k }),
]);

export const swatch = recipe({
  base: {
    width: "50px",
    height: "50px",
  },
  variants: { color: swatchVariants },
});

export const swatches = style({
  display: "flex",
  flexDirection: "row",
});
