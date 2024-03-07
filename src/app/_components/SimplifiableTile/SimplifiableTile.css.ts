import { themeRootClass } from "@/components/ThemeProvider/ThemeProvider.css";
import { simpleClass } from "@/themes/base.css";
import {
  backgroundDefaultColors,
  labelDefaultColors,
  semanticColorKeymap,
} from "@/themes/sprinkles/colors.css";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/themes/sprinkles.css";
import { spacing } from "@/themes/sprinkles/sizes.css";

const colorVariants = styleVariants(semanticColorKeymap, (v, color) => [
  {
    selectors: {
      [`.${themeRootClass}:not(.${simpleClass}) &`]: {
        color: labelDefaultColors[`label${color}`],
        backgroundColor: backgroundDefaultColors[`background${color}`],
      },
    },
  },
]);

export const simplifiableTile = recipe({
  variants: {
    hasPadding: {
      true: {
        selectors: {
          [`.${themeRootClass}:not(.${simpleClass}) &`]: {
            padding: spacing["spacing3"],
          },
        },
      },
    },
    color: colorVariants,
  },
});
