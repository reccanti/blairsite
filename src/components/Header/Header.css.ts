import { typeFonts } from "../../themes/sprinkles/fonts.css";
import { sprinkles } from "../../themes/sprinkles.css";

import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const { bodyType, ...typeFontsWithoutBody } = typeFonts;
export const header = recipe({
  variants: {
    size: styleVariants(typeFontsWithoutBody, (v, type) => [
      sprinkles({ typography: type }),
    ]),
  },
});
