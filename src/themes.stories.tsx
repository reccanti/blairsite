import type { Meta, StoryObj } from "@storybook/react";
import { lightClass } from "./global.css";
import { swatch, swatches } from "./themes.css";

import {
  baseMagenta,
  baseGreen,
  baseBlue,
  baseRed,
  baseGray,
  baseColors,
  baseYellow,
} from "./sprinkles.css";

import { keys } from "./lib/utils/records";

const Swatch = ({ color }: { color: keyof typeof baseColors }) => (
  <div className={swatch({ color })} />
);

const Palettes = () => {
  return (
    <>
      <h1>Base Color Palette</h1>
      <div className={swatches}>
        <Swatch color="baseBlack" />
        <Swatch color="baseWhite" />
      </div>
      <div className={swatches}>
        {keys(baseMagenta).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>
      <div className={swatches}>
        {keys(baseGreen).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>
      <div className={swatches}>
        {keys(baseBlue).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>
      <div className={swatches}>
        {keys(baseRed).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>
      <div className={swatches}>
        {keys(baseYellow).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>
      <div className={swatches}>
        {keys(baseGray).map((variant) => (
          <Swatch key={variant} color={variant} />
        ))}
      </div>

      <h1>Semantic Backgrounds</h1>
      {/* <div className={palette}>
        <div className={swatches}>
          {keys(backgroundVariants).map((variant) => (
            <Swatch key={variant} variant={swatch({ color: variant })} />
          ))}
        </div>
        <div className={swatches}>
          {keys(hoveredBackgroundVariants).map((variant) => (
            <Swatch key={variant} variant={swatch({ color: variant })} />
          ))}
        </div>
      </div> */}
    </>
  );
};

const meta: Meta = {
  title: "Themes",
  component: Palettes,
  decorators: (Story) => (
    <div>
      <Story />
    </div>
  ),
};

type Story = StoryObj<typeof Palettes>;

export const Colors: Story = {};

export default meta;
