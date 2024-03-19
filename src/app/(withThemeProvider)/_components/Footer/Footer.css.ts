import { sprinkles } from "@/themes/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const footer = style([
  sprinkles({ paddingX: "spacing3", paddingY: "spacing4" }),
  {
    textAlign: "center",
    "@media": {
      // hide the entire footer when printing
      print: {
        display: "none",
      },
    },
  },
]);
