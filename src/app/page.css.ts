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

const titleBlock = style({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const stretchBlock = style([
  sprinkles({ gap: "spacing2" }),
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    width: "100%",
  },
]);

export const sectionHeader = style([
  titleBlock,
  {
    aspectRatio: "1 auto",
    gridArea: "header",
  },
]);

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

export const sectionContent = style([
  stretchBlock,
  {
    gridArea: "content",
    "@media": {
      // we don't want to force the aspect ratio of the content if the entry is
      // "stacked". It leads to a lot of whitespace
      [desktopQuery]: {
        aspectRatio: "1 auto",
      },
    },
  },
]);

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

// projects section: large title block with summary text, followed by alternating
// rows of small title blocks and descriiptions

export const projects = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    [desktopQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "content header header"
      `,
      gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
    },
  },
});

export const projectList = style({
  gridColumn: "1 / -1",
});

export const project = style({
  display: "flex",
  flexDirection: "column",
  gridColumn: "span 3",
  "@media": {
    [tabletQuery]: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      selectors: {
        "&:nth-child(2n + 1)": {
          gridTemplateAreas: `"header content"`,
        },
        "&:nth-child(2n)": {
          gridTemplateAreas: `"content content"`,
        },
      },
    },
    [desktopQuery]: {
      display: "grid",
      gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
      selectors: {
        "&:nth-child(2n + 1)": {
          gridTemplateAreas: `"header content content"`,
        },
        "&:nth-child(2n)": {
          gridTemplateAreas: `"content content header"`,
        },
      },
    },
  },
});

export const projectHeader = style({
  aspectRatio: "1 auto",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gridArea: "header",
});

export const projectContent = style([
  stretchBlock,
  {
    gridArea: "content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    width: "100%",
    "@media": {
      // we don't want to force the aspect ratio of the content if the entry is
      // "stacked". It leads to a lot of whitespace
      [desktopQuery]: {
        aspectRatio: "2 auto",
      },
    },
  },
]);
