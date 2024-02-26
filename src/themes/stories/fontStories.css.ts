import { recipe } from "@vanilla-extract/recipes";
import { typeFonts } from "../sprinkles/fonts.css";
import { sprinkles } from "../sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";
import { labelFocus } from "../sprinkles/focus.css";

// while we're only using the keys from typeFonts here, the way the typography
// shorthand is set up, the keys for setting both font and type decoration and
// the shorthand will all be the same
export const typographyVariants = styleVariants(typeFonts, (v, k) => [
  sprinkles({ typography: k }),
]);

export const focusVariants = styleVariants(labelFocus, (v, k) => [
  sprinkles({ border: k }),
]);

export const typography = recipe({
  base: {
    display: "block",
  },
  variants: {
    type: typographyVariants,
    focus: focusVariants,
  },
});
