import { globalStyle, createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  font: {
    heading: "",
    body: "",
  },
});

globalStyle("body", {
  fontFamily: theme.font.body,
  fontWeight: "300",
  fontSize: "1.1rem",
  lineHeight: "1.3",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: theme.font.heading,
  fontWeight: "900",
});
