import { sprinkles } from "@/themes/sprinkles.css";
import { globalStyle, style } from "@vanilla-extract/css";

// .sr-only:not(:focus):not(:active) {
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1px;
//   overflow: hidden;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// }

export const siteHeader = style([
  {
    display: "flex",
    alignItems: "stretch",
    position: "sticky",
    top: 0,
    zIndex: 2,
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

export const menus = style({
  flex: "1",
  display: "flex",
  justifyContent: "flex-end",
});
export const menuWrapper = style({
  position: "relative",
  // display: "flex",
});
export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "absolute",
  width: "auto",
  height: "auto",
  right: 0,
});

/**
 * Visually hidden styles. This way, the menu won't show up unless
 */
globalStyle(`.${menuWrapper}:not(:focus-within) .${menu}`, {
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

export const menuListItem = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const menuToggleButtonWrapper = style({
  display: "flex",
  height: "100%",
});
export const menuToggleButton = style([sprinkles({ padding: "spacing1" })]);
export const menuButton = style({
  width: "max-content",
});
