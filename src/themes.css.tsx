import { style } from "@vanilla-extract/css";
import { colorVars } from "./global.css";

export const colorStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: colorVars.colors.base.green["1"],
});
