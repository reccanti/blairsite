import { sprinkles } from "@/themes/sprinkles.css";
import {
  typeDecorations,
  typeFonts,
  typeTransforms,
} from "@/themes/sprinkles/fonts.css";
import { spacing } from "@/themes/sprinkles/sizes.css";
import {
  beforeDesktopQuery,
  desktopQuery,
  tabletQuery,
} from "@/themes/utlities/breakpoints.css";
import {
  globalSimpleModeStyles,
  globalStyledModeStyles,
} from "@/themes/utlities/themes.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  width: "50%",
  position: "relative",
  order: 1,
});

export const imageImg = style({
  padding: spacing["spacing3"],
});

globalSimpleModeStyles(`${image}`, {
  display: "none",
});

export const label = style({});

globalStyledModeStyles(`${label}`, {
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  font: typeFonts["header5Type"],
  textDecoration: typeDecorations["header5Type"],
  textTransform: typeTransforms["header5Type"],
  "@media": {
    [tabletQuery]: {
      font: typeFonts["header4Type"],
      textDecoration: typeDecorations["header4Type"],
      textTransform: typeTransforms["header4Type"],
    },
  },
});

export const item = style({});

globalStyledModeStyles(`${item}`, {
  listStyle: "none",
  display: "flex",
  aspectRatio: "2 auto",
});

export const list = style({});

globalStyledModeStyles(`${list}`, {
  "@media": {
    [desktopQuery]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});

globalStyledModeStyles(`.${list} > .${item}`, {
  "@media": {
    [desktopQuery]: {
      aspectRatio: "0.5 auto",
      flexDirection: "column",
    },
  },
});

globalStyledModeStyles(
  `.${list} > .${item} > .${image}, .${list} > .${item} > .${label}`,
  {
    "@media": {
      [desktopQuery]: {
        width: "100%",
        height: "50%",
      },
    },
  }
);
globalStyledModeStyles(`.${list} > .${item}:nth-of-type(2n + 1)`, {
  "@media": {
    [beforeDesktopQuery]: {
      flexDirection: "row-reverse",
    },
  },
});

globalStyledModeStyles(`.${list} > .${item}:nth-of-type(3n + 2)`, {
  "@media": {
    [desktopQuery]: {
      flexDirection: "column-reverse",
    },
  },
});
