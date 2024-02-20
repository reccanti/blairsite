import {
  globalStyle,
  keyframes,
  createThemeContract,
} from "@vanilla-extract/css";
import BackgroundImage1 from "@/../public/assets/BackgroundImage1.svg";
import BackgroundImage2 from "@/../public/assets/BackgroundImage2.svg";
import BackgroundImage3 from "@/../public/assets/BackgroundImage3.svg";

export const theme = createThemeContract({
  font: {
    heading: "",
    body: "",
  },
});

const backgroundFall = keyframes({
  from: {
    backgroundPositionY: "calc(0% - 100vh)",
  },
  to: {
    backgroundPositionY: "calc(-100%)",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: theme.font.body,
  fontWeight: "300",
  fontSize: "1rem",
  lineHeight: "1.3",

  // background animation
  backgroundImage: `
    url("${BackgroundImage1.src}"),
    url("${BackgroundImage2.src}"),
    url("${BackgroundImage3.src}")
  `,
  backgroundPositionX: `
    left,
    right,
    center
  `,
  backgroundAttachment: "fixed",
  backgroundRepeat: "repeat-y",

  animation: `${backgroundFall} 240s linear infinite`,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: theme.font.heading,
  fontWeight: "900",
});
