import { StyleRule } from "@vanilla-extract/css";

export const visuallyHiddenProperties: StyleRule = {
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};
