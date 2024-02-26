import { createSprinkles } from "@vanilla-extract/sprinkles";
import {
  backgroundColorProperties,
  labelColorProperties,
} from "./sprinkles/colors.css";
import { typographyProperties } from "./sprinkles/fonts.css";
import { spacingProperties } from "./sprinkles/sizes.css";
import { focusProperties } from "./sprinkles/focus.css";

export const sprinkles = createSprinkles(
  backgroundColorProperties,
  labelColorProperties,
  typographyProperties,
  spacingProperties,
  focusProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
