import { keyframes, style, globalStyle } from "@vanilla-extract/css";
import image1 from "../../public/assets/BackgroundImage1.png";
import image2 from "../../public/assets/BackgroundImage2.png";
import image3 from "../../public/assets/BackgroundImage3.png";
import { sprinkles } from "../themes/sprinkles.css";
import { highlight } from "../components/Highlight/Highlight.css";
import { header } from "../components/Header/Header.css";
import { lineHeights } from "../themes/sprinkles/fonts.css";
import { reducedMotionClass } from "../themes/base.css";

const scrollingBackgroundFrames = keyframes({
  "0%": {
    backgroundPositionY: "calc(0% - 100vh)",
  },
  "100%": {
    backgroundPositionY: "calc(-100%)",
  },
});

export const scrollingBackgroundStyles: Parameters<typeof style>[0] = {
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
};

export const scrollingBackground = style({
  "@media": {
    "not (prefers-reduced-motion)": {
      ...scrollingBackgroundStyles,
    },
  },
  selectors: {
    [`.themeRoot:not(.${reducedMotionClass}) &`]: {
      ...scrollingBackgroundStyles,
    },
  },
});

export const pageWrapper = style([
  scrollingBackground,
  {
    minHeight: "100vh",
  },
]);
