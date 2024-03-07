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

globalStyle("h1, h2, h3, h4, h5, h6", {
  font: typeFonts.header6Type,
  textDecoration: typeDecorations.header6Type,
});

const aSelector = `a:not(.${button()})`;

globalStyle(aSelector, {
  color: labelLinkColors.labelLinkDefault,
  font: typeFonts.linkType,
  textDecoration: typeDecorations.linkType,
});
globalStyle(`${aSelector}:focus`, {
  border: labelFocus.focusLink,
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
