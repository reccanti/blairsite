import { sprinkles } from "@/themes/sprinkles.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { overlay as overlayBackground } from "@/themes/sprinkles/colors.css";
import { timing } from "@/themes/sprinkles/timing.css";

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
    position: "absolute",
    width: "100%",
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
});

/**
 * Visually hidden styles. This way, the menu won't show up unless
 */
globalStyle(`.${menuWrapper}:not(:focus-within)`, {
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

export const menuToggleButtonWrapper = style({});
export const menuToggleButton = style([sprinkles({ padding: "spacing1" })]);
export const menuButton = style({
  width: "max-content",
});

// overlay

export const overlayWrapper = style({
  position: "sticky",
  top: 0,
  zIndex: 2,
});

export const overlay = style({
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
  background: overlayBackground,
  position: "absolute",
  top: 0,
  zIndex: 1,

  opacity: 0,
  transitionProperty: "opacity",
  transitionDuration: timing.timing3,

  selectors: {
    [`.${overlayWrapper}:focus-within &`]: {
      opacity: 1,
    },
  },
});
