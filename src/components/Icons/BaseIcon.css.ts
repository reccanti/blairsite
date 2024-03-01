import { style } from "@vanilla-extract/css";

export const baseIconWrapper = style({
  position: "relative",
  display: "flex",
  selectors: {
    "&::before": {
      content: "",
      display: "block",
      position: "absolute",
      backgroundColor: "red",
      width: "100%",
      height: "100%",
    },
  },
});
