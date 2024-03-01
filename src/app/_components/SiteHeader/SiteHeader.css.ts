import { sprinkles } from "@/themes/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const siteHeader = style([
  {
    display: "flex",
    alignItems: "stretch",
  },
]);
export const headerLink = style([
  sprinkles({ padding: "spacing1" }),
  {
    display: "flex",
    alignItems: "center",
  },
]);
export const header = style([
  {
    textTransform: "initial",
  },
]);

export const menuButtons = style({
  flex: "1",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "end",
});
export const menuButton = style([sprinkles({ padding: "spacing1" })]);
