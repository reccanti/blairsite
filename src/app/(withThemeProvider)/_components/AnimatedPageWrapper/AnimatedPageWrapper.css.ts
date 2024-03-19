import { keyframes, style } from "@vanilla-extract/css";
import image1 from "../../../../public/assets/BackgroundImage1.png";
import image2 from "../../../../public/assets/BackgroundImage2.png";
import image3 from "../../../../public/assets/BackgroundImage3.png";
import { reducedMotionClass } from "../../../../themes/base.css";
import { backgroundDefaultColors } from "@/themes/sprinkles/colors.css";
import { timing } from "@/themes/sprinkles/timing.css";

const scrollingBackgroundFrames = keyframes({
  "0%": {
    backgroundPositionY: "calc(0% - 100vh)",
  },
  "100%": {
    backgroundPositionY: "calc(-100%)",
  },
});

export const scrollingBackgroundStyles: Parameters<typeof style>[0] = {
  content: "",
  width: "100vw",
  height: "100vh",
  backgroundColor: backgroundDefaultColors["backgroundDefault"],
  backgroundImage: `
    url("${image1.src}"), 
    url("${image2.src}"), 
    url("${image3.src}")`,
  backgroundPositionX: `
    left,
    right,
    center`,
  backgroundRepeat: "repeat-y",
  position: "fixed",

  // transform: "translate3d(0, 0, 0)",
  // willChange: "background-position-y",
  // animation: `${scrollingBackgroundFrames} 240s linear infinite`,
};

/**
 * We're applying this scrolling animation to a fixed pseudo selector rather
 * than using `background-attachment: fixed` because the effect is jittery in
 * Safari. The comment below suggested using a `position: fixed` element, which
 * seems to do the trick:
 *
 * https://discourse.webflow.com/t/fixed-images-scroll-jumpy-and-glitchy-in-safari/108874
 *
 * ~Blair, 2/28/2024
 */
export const scrollingBackground = style({
  "@media": {
    "not (prefers-reduced-motion)": {
      selectors: {
        "&::before": {
          ...scrollingBackgroundStyles,
        },
      },
    },
  },
  selectors: {
    [`.themeRoot:not(.${reducedMotionClass}) &::before`]: {
      ...scrollingBackgroundStyles,
    },
  },
});

export const pageWrapper = style({
  minHeight: "100vh",
});

export const innerWrapper = style({
  position: "relative",
  zIndex: 1,
});
