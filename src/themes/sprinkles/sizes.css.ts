import { defineProperties } from "@vanilla-extract/sprinkles";
import { colorVars } from "../base.css";

const { spacing: spacingVars } = colorVars.spacing;

export const spacing = {
  spacing1: spacingVars["1"],
  spacing2: spacingVars["2"],
  spacing3: spacingVars["3"],
  spacing4: spacingVars["4"],
  spacing5: spacingVars["5"],
  spacing6: spacingVars["6"],
  spacing7: spacingVars["7"],
};

export const spacingProperties = defineProperties({
  properties: {
    padding: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    margin: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    gap: spacing,
    left: spacing,
    right: spacing,
    top: spacing,
    bottom: spacing,
  },
});
