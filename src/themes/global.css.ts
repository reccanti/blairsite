import { globalStyle } from "@vanilla-extract/css";

import { fontVars } from "./base.css";
import {
  backgroundDefaultColors,
  labelDefaultColors,
  labelLinkColors,
  labelLinkVisitedColors,
} from "./sprinkles/colors.css";
import { typeDecorations, typeFonts } from "./sprinkles/fonts.css";

globalStyle(":root", {
  backgroundColor: backgroundDefaultColors.backgroundDefault,
  color: labelDefaultColors.labelDefault,
});

// globalStyle(":root", sprinkles({ backgroundColor: "backgroundDefault" }));

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontSize: fontVars.fontSizes.fontSizes.body,
  font: typeFonts.bodyType,
  textDecoration: typeDecorations.bodyType,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  font: typeFonts.header6Type,
  textDecoration: typeDecorations.header6Type,
});

globalStyle("a", {
  color: labelLinkColors.labelLinkDefault,
});
globalStyle("a:hover", {
  color: labelLinkColors.labelLinkHover,
});
globalStyle("a:visited", {
  color: labelLinkVisitedColors.labelLinkVisitedDefault,
});
globalStyle("a:visited:hover", {
  color: labelLinkVisitedColors.labelLinkVisitedHover,
});
