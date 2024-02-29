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

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle(":root", {
  backgroundColor: backgroundDefaultColors.backgroundDefault,
  color: labelDefaultColors.labelDefault,
  font: typeFonts.bodyType,
  textDecoration: typeDecorations.bodyType,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  font: typeFonts.header6Type,
  textDecoration: typeDecorations.header6Type,
});

globalStyle("a", {
  color: labelLinkColors.labelLinkDefault,
  font: typeFonts.linkType,
  textDecoration: typeDecorations.linkType,
});
globalStyle("a:focus", {
  border: labelFocus.focusLink,
});
globalStyle("a:hover", {
  color: labelLinkColors.labelLinkHover,
  font: typeFonts.linkHoverType,
  textDecoration: typeDecorations.linkHoverType,
});
globalStyle("a:focus:hover", {
  border: labelFocus.focusLinkHover,
});
globalStyle("a:visited", {
  color: labelLinkVisitedColors.labelLinkVisitedDefault,
});
globalStyle("a:visited:focus", {
  border: labelFocus.focusLinkVisited,
});
globalStyle("a:visited:hover", {
  color: labelLinkVisitedColors.labelLinkVisitedHover,
});
globalStyle("a:visited:focus:hover", {
  border: labelFocus.focuslinkVisitedHover,
});

globalStyle("button", {
  all: "unset",
  cursor: "pointer",
});
