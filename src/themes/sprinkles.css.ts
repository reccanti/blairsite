import { createSprinkles } from "@vanilla-extract/sprinkles";
import {
  backgroundColorProperties,
  labelColorProperties,
} from "./sprinkles/colors.css";
import { typographyProperties } from "./sprinkles/fonts.css";
import { spacingProperties } from "./sprinkles/sizes.css";

export const sprinkles = createSprinkles(
  backgroundColorProperties,
  labelColorProperties,
  typographyProperties,
  spacingProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
