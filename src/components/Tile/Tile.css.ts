import { styleVariants, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../themes/sprinkles.css";
import {
  backgroundDefaultColors,
  labelDefaultColors,
  semanticColorKeymap,
} from "../..//themes/sprinkles/colors.css";
import { themeRootClass } from "../ThemeProvider/ThemeProvider.css";
import { simpleClass } from "@/themes/base.css";

const colorVariants = styleVariants(semanticColorKeymap, (v, color) => [
  sprinkles({ backgroundColor: `background${color}`, color: `label${color}` }),
]);

export const tile = recipe({
  variants: {
    hasPadding: {
      true: sprinkles({ padding: "spacing3" }),
    },
    color: colorVariants,
  },
});
