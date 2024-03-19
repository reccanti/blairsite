import { spacing } from "@/themes/sprinkles/sizes.css";
import {
  maxContentWidth,
  tabletQuery,
} from "@/themes/utlities/breakpoints.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const wrapper = "resumeWrapper";

globalStyle(`.${wrapper}`, {
  paddingTop: spacing["spacing3"],
  paddingLeft: spacing["spacing1"],
  paddingRight: spacing["spacing1"],
  maxWidth: maxContentWidth,
  margin: "0 auto",
  "@media": {
    [tabletQuery]: {
      paddingTop: spacing["spacing3"],
      paddingLeft: spacing["spacing5"],
      paddingRight: spacing["spacing5"],
    },
    print: {
      maxWidth: "8.5in",
    },
  },
});

export const section = "resumeSection";

globalStyle(`.${wrapper} > .${section}:not(:first-child)`, {
  paddingTop: spacing["spacing2"],
});

globalStyle(`.${section} > *:not(:first-child)`, {
  paddingTop: spacing["spacing1"],
});

// start and end dates are separated a "~" character

globalStyle(`.${wrapper} .dates`, {
  paddingTop: 0,
});

globalStyle(`.${wrapper} .dates > *:first-child::after`, {
  content: " ~ ",
});

// contacts are listed inline, and each item is separated by a "|"

export const contactList = style({});

globalStyle(`.${contactList} li`, {
  listStyle: "none",
  display: "inline",
});

globalStyle(`.${contactList} li:not(:first-child)::before`, {
  content: " | ",
});

// Skills are grouped in sections whose title is inline, follwed by a a "-", and
// where each item is comma-separated

export const skillListWrapper = style({
  selectors: {
    "&:not(:first-child)": {
      paddingTop: spacing["spacing1"],
    },
  },
});

export const skillListHeader = style({
  display: "inline",
  selectors: {
    "&::after": {
      content: " - ",
    },
  },
});

export const skillList = style({
  display: "inline",
});

globalStyle(`.${skillList} li`, {
  listStyle: "none",
  display: "inline",
});

globalStyle(`.${skillList} li:not(:last-child)::after`, {
  content: ", ",
});
