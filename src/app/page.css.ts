import { keyframes, style, globalStyle } from "@vanilla-extract/css";
import image1 from "../../public/assets/BackgroundImage1.png";
import image2 from "../../public/assets/BackgroundImage2.png";
import image3 from "../../public/assets/BackgroundImage3.png";
import { sprinkles } from "@/themes/sprinkles.css";
import { highlight } from "@/components/Highlight/Highlight.css";
import { header } from "@/components/Header/Header.css";
import { lineHeights } from "@/themes/sprinkles/fonts.css";

const scrollingBackgroundFrames = keyframes({
  from: {
    backgroundPositionY: "calc(0% - 100vh)",
  },
  to: {
    backgroundPositionY: "calc(-100%)",
  },
});

export const scrollingBackground = style({
  backgroundImage: `
    url("${image1.src}"), 
    url("${image2.src}"), 
    url("${image3.src}")`,
  backgroundPositionX: `
    left,
    right,
    center`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "repeat-y",
  willChange: "background-position-y",
  transform: "translateZ(0)",

  animation: `${scrollingBackgroundFrames} 240s linear infinite`,
});

export const pageWrapper = style([
  scrollingBackground,
  {
    minHeight: "100vh",
  },
]);

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
