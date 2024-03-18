import { style, globalStyle, ComplexStyleRule } from "@vanilla-extract/css";
import { sprinkles } from "../themes/sprinkles.css";
import { highlight } from "../components/Highlight/Highlight.css";
import { header } from "../components/Header/Header.css";
import {
  lineHeights,
  typeDecorations,
  typeFonts,
  typeTransforms,
} from "../themes/sprinkles/fonts.css";
import {
  desktopQuery,
  desktopSize,
  tabletQuery,
} from "@/themes/utlities/breakpoints.css";
import {
  globalSimpleModeStyles,
  globalStyledModeStyles,
} from "@/themes/utlities/themes.css";
import { spacing } from "@/themes/sprinkles/sizes.css";
import { labelDefaultColors } from "@/themes/sprinkles/colors.css";

// styles that can be re-used per section

export const contentWrapper = style({
  maxWidth: desktopSize,
  margin: "0 auto",
});

// const titleBlock = style({
//   height: "100%",
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
// });

// const stretchBlock = style([sprinkles({ gap: "spacing2" }), {}]);

const stretchBlockStyles: ComplexStyleRule = {
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  width: "100%",
};

export const sectionHeader = style({
  textAlign: "center",
});

globalStyledModeStyles(sectionHeader, {
  aspectRatio: "1 auto",
  gridArea: "header",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const sectionContentWrapper = style({
  display: "flex",
  gridArea: "content",
  flexDirection: "column",
  position: "relative",
  "@media": {
    [tabletQuery]: {
      flexDirection: "row",
    },
  },
});

globalSimpleModeStyles(sectionContentWrapper, {
  paddingTop: spacing["spacing3"],
  paddingBottom: spacing["spacing3"],
});

globalStyledModeStyles(sectionContentWrapper, {
  "@media": {
    [desktopQuery]: {
      flexDirection: "column",
    },
  },
});

export const sectionImage = style({
  aspectRatio: "1 auto",
  position: "relative",
  gridArea: "image",
  overflow: "hidden",
  height: "100%",
  width: "100%",
});

// globalSimpleModeStyles(sectionImage, {
//   width: "50%",
// });

globalStyledModeStyles(sectionImage, {});

export const sectionImageImg = style({
  objectFit: "cover",
});

export const sectionContent = style({
  ...stretchBlockStyles,
  gap: spacing["spacing2"],
});

globalStyledModeStyles(sectionContent, {
  // gridArea: "content",
  // ...stretchBlockStyles,
  flex: 1,
  "@media": {
    // make sure the content is at least "50%" width on tablet, otherwise
    // NextJS's Image component will fill the container
    [tabletQuery]: {
      flex: "1 0 50%",
    },
    // we don't want to force the aspect ratio of the content if the entry is
    // "stacked". It leads to a lot of whitespace
    [desktopQuery]: {
      aspectRatio: "1 auto",
    },
  },
});

// splash section with centered text

export const splash = style([
  sprinkles({ padding: "spacing3", lineHeight: "lineHeight2" }),
  {
    minHeight: "80vh",
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
});

globalStyledModeStyles(about, {
  "@media": {
    [tabletQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "header header"
        "content content"
      `,
      gridTemplateColumns: "50% 50%",
    },
    [desktopQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "header header content"
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
});

globalStyledModeStyles(projects, {
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

// export const project = style({
//   display: "flex",
//   flexDirection: "column",
//   gridColumn: "span 3",
//   "@media": {
//     [tabletQuery]: {
//       display: "grid",
//       gridTemplateColumns: "50% 50%",
//       selectors: {
//         "&:nth-child(2n + 1)": {
//           gridTemplateAreas: `"header content"`,
//         },
//         "&:nth-child(2n)": {
//           gridTemplateAreas: `"content header"`,
//         },
//       },
//     },
//     [desktopQuery]: {
//       display: "grid",
//       gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
//       selectors: {
//         "&:nth-child(2n + 1)": {
//           gridTemplateAreas: `"header content content"`,
//         },
//         "&:nth-child(2n)": {
//           gridTemplateAreas: `"content content header"`,
//         },
//       },
//     },
//   },
// });

export const project = style({});

globalStyledModeStyles(project, {
  display: "flex",
  flexDirection: "column",
  gridColumn: "span 3",
  "@media": {
    [tabletQuery]: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    [desktopQuery]: {
      display: "grid",
      gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
    },
  },
});

globalStyledModeStyles(`.${project}:nth-child(2n + 1)`, {
  "@media": {
    [tabletQuery]: {
      gridTemplateAreas: `"header content"`,
    },
    [desktopQuery]: {
      gridTemplateAreas: `"header content content"`,
    },
  },
});

globalStyledModeStyles(`.${project}:nth-child(2n)`, {
  "@media": {
    [tabletQuery]: {
      gridTemplateAreas: `"content header"`,
    },
    [desktopQuery]: {
      gridTemplateAreas: `"content content header"`,
    },
  },
});

globalStyledModeStyles(project, {});

export const projectHeader = style({});

globalSimpleModeStyles(projectHeader, {
  background: "transparent",
  color: labelDefaultColors["labelDefault"],
});

globalStyledModeStyles(projectHeader, {
  aspectRatio: "1 auto",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gridArea: "header",
});

export const projectContent = style({});

globalStyledModeStyles(projectContent, {
  ...stretchBlockStyles,
  gridArea: "content",
  display: "flex",
  // alignItems: "center",
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
});

// skills section: Large block title with summary text, followed by a list of
// grid items

export const skills = style({
  display: "flex",
  flexDirection: "column",
});

globalStyledModeStyles(skills, {
  "@media": {
    [desktopQuery]: {
      display: "grid",
      gridTemplateAreas: `
        "header header content"
      `,
      gridTemplateColumns: "calc(100% / 3) calc(100% / 3) calc(100% / 3)",
    },
  },
});

export const skillSections = style({});

globalSimpleModeStyles(skillSections, {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  "@media": {
    [tabletQuery]: {
      flexDirection: "row",
    },
  },
});

globalStyledModeStyles(skillSections, {
  gridColumn: "span 3",
});

export const skillSectionHeader = style({});

globalSimpleModeStyles(skillSectionHeader, {
  font: typeFonts["header5Type"],
  textDecoration: typeDecorations["header5Type"],
  textTransform: typeTransforms["header5Type"],
  textAlign: "center",
  "@media": {
    [tabletQuery]: {
      textAlign: "start",
    },
  },
});

globalStyledModeStyles(skillSectionHeader, {
  aspectRatio: "1 auto",
  font: typeFonts["header4Type"],
  textDecoration: typeDecorations["header4Type"],
  textTransform: typeTransforms["header4Type"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [tabletQuery]: {
      aspectRatio: "2 auto",
    },
    [desktopQuery]: {
      aspectRatio: "3 auto",
    },
  },
});

export const skillSection = style({});

globalSimpleModeStyles(skillSection, {
  width: "100%",
  flex: "0 0 auto",
  "@media": {
    [tabletQuery]: {
      width: "50%",
    },
    [desktopQuery]: {
      width: "calc(100% / 3)",
    },
  },
});

export const skillList = style({});

globalSimpleModeStyles(skillList, {
  paddingLeft: spacing["spacing3"],
  paddingRight: spacing["spacing3"],
  paddingBottom: spacing["spacing3"],
});

// contact section: Large block title with summary tex

export const contact = style({
  display: "flex",
  flexDirection: "column",
});

globalStyledModeStyles(contact, {
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
