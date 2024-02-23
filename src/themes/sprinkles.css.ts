import { createSprinkles } from "@vanilla-extract/sprinkles";
import {
  backgroundColorProperties,
  labelColorProperties,
} from "./sprinkles/colors.css";
import { typographyProperties } from "./sprinkles/fonts.css";

export const sprinkles = createSprinkles(
  backgroundColorProperties,
  labelColorProperties,
  typographyProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
