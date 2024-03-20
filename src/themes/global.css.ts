import "./base.css";

import { globalStyle } from "@vanilla-extract/css";
import {
  backgroundDefaultColors,
  labelDefaultColors,
  labelLinkColors,
  labelLinkVisitedColors,
} from "./sprinkles/colors.css";
import { typeDecorations, typeFonts } from "./sprinkles/fonts.css";
import { labelFocus } from "./sprinkles/focus.css";
import { button } from "../components/Button/Button.css";
import { themeRootClass } from "@/components/ThemeProvider/ThemeProvider.css";
import { timing } from "./sprinkles/timing.css";
import { globalWithMotionStyles } from "./utlities/themes.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle(`:root, .${themeRootClass}`, {
  backgroundColor: backgroundDefaultColors.backgroundDefault,
  color: labelDefaultColors.labelDefault,
  font: typeFonts.bodyType,
  textDecoration: typeDecorations.bodyType,
});

globalWithMotionStyles("", {
  scrollBehavior: "smooth",
});

globalStyle(`:root *, .${themeRootClass} *`, {
  transitionProperty: "background",
  transitionDuration: `${timing.timing1}`,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  font: typeFonts.header6Type,
  textDecoration: typeDecorations.header6Type,
});

globalStyle("ul", {
  listStylePosition: "inside",
});

const aSelector = `a:not(.${button()})`;

globalStyle(aSelector, {
  color: labelLinkColors.labelLinkDefault,
  font: typeFonts.linkType,
  textDecoration: typeDecorations.linkType,
});
globalStyle(`${aSelector}:focus`, {
  border: labelFocus.focusLink,
  outline: "none",
});
globalStyle(`${aSelector}:hover`, {
  color: labelLinkColors.labelLinkHover,
  font: typeFonts.linkHoverType,
  textDecoration: typeDecorations.linkHoverType,
});
globalStyle(`${aSelector}:focus:hover`, {
  border: labelFocus.focusLinkHover,
});
globalStyle(`${aSelector}:visited`, {
  color: labelLinkVisitedColors.labelLinkVisitedDefault,
  "@media": {
    print: {
      color: labelLinkColors.labelLinkDefault,
    },
  },
});
globalStyle(`${aSelector}:visited:focus`, {
  border: labelFocus.focusLinkVisited,
});
globalStyle(`${aSelector}:hover`, {
  color: labelLinkVisitedColors.labelLinkVisitedHover,
});
globalStyle(`${aSelector}:visited:focus:hover`, {
  border: labelFocus.focuslinkVisitedHover,
});

globalStyle(`button`, {
  all: "unset",
  cursor: "pointer",
});
