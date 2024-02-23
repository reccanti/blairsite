import { recipe } from "@vanilla-extract/recipes";
import { backgroundColors, labelColors } from "../sprinkles/colors.css";
import { sprinkles } from "../sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const colorSwatchVariants = styleVariants(backgroundColors, (v, k) => [
  sprinkles({ backgroundColor: k }),
]);

export const colorSwatch = recipe({
  base: {
    width: "50px",
    height: "50px",
  },
  variants: { color: colorSwatchVariants },
});

export const colorSwatches = style({
  display: "flex",
  flexDirection: "row",
});

export const labelSwatchVariants = styleVariants(labelColors, (v, k) => [
  sprinkles({ color: k }),
]);

export const labelSwatch = recipe({
  variants: { color: labelSwatchVariants },
});

export const labelSwatches = style({
  display: "flex",
  gap: "8px",
});

export const palette = style({
  paddingTop: "8px",
  paddingBottom: "8px",
});

export const palettes = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});
