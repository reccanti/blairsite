import { style, globalStyle } from "@vanilla-extract/css";
import { sprinkles } from "../themes/sprinkles.css";
import { highlight } from "../components/Highlight/Highlight.css";
import { header } from "../components/Header/Header.css";
import { lineHeights } from "../themes/sprinkles/fonts.css";
import {
  desktopQuery,
  desktopSize,
  tabletQuery,
} from "@/themes/utlities/breakpoints.css";

// styles that can be re-used per section

export const contentWrapper = style({
  maxWidth: desktopSize,
  margin: "0 auto",
});

export const sectionHeader = style({
  aspectRatio: "1 auto",
  gridArea: "header",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const sectionImage = style({
  aspectRatio: "1 auto",
  gridArea: "image",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
});

export const sectionImageImg = style({
  objectFit: "cover",
});

export const sectionContent = style({
  aspectRatio: "1 auto",
  gridArea: "content",
  display: "flex",
  alignItems: "center",
});

// splash section with centered text

export const splash = style([
  sprinkles({ padding: "spacing3", lineHeight: "lineHeight2" }),
  {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const splashHeader = style({
  textAlign: "center",
});

globalStyle(`${splashHeader} ${highlight()}`, {
  textWrap: "nowrap",
});

globalStyle(`${splashHeader} ${header()}`, {
  lineHeight: lineHeights.lineHeight2,
});

// about section: large title block with an image and text

export const about = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    [tabletQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "header header"
        "image content"
      `,
      gridTemplateColumns: "50% 50%",
    },
    [desktopQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "header header image"
        "header header content"
      `,
      gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
    },
  },
});
