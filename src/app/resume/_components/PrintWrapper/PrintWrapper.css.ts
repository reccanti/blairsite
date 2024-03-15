import { style } from "@vanilla-extract/css";

export const printWrapper = style({
  // all: "unset",
  "@media": {
    print: {
      display: "block",
      aspectRatio: "8.5 / 11",
      width: "8.5in",
      height: "11in",
      // for debugging
      border: "1px solid red",
    },
  },
});
