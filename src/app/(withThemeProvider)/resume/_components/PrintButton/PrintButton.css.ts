import { spacing } from "@/themes/sprinkles/sizes.css";
import { style } from "@vanilla-extract/css";

export const printButtonWrapper = style({
  position: "sticky",
  bottom: 0,
  display: "flex",
  justifyContent: "flex-end",
  padding: spacing["spacing3"],
  "@media": {
    print: {
      display: "none",
    },
  },
});
