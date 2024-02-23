import { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  colorSwatch,
  colorSwatches,
  labelSwatch,
  labelSwatches,
  palette,
  palettes,
} from "./colorStories.css";

import {
  baseMagenta,
  baseGreen,
  baseBlue,
  baseRed,
  baseGray,
  baseYellow,
  backgroundDefaultColors,
  backgroundHoverColors,
  labelDefaultColors,
  labelInactiveColors,
  labelHighlightColors,
  labelLinkColors,
  labelLinkVisitedColors,
  backgroundColors,
  labelColors,
} from "../sprinkles/colors.css";

import { keys } from "../../lib/utils/records";

const ColorSwatch = ({ color }: { color: keyof typeof backgroundColors }) => (
  <div className={colorSwatch({ color })} />
);

const LabelSwatch = ({
  color,
  children,
}: {
  color: keyof typeof labelColors;
  children: ReactNode;
}) => <span className={labelSwatch({ color })}>{children}</span>;

// const LabelSwatch = ({ color}: {color keyof typeof colors }) => (<div className={swatch({ color })} />)

const Palettes = () => {
  return (
    <div className={palettes}>
      <div>
        <h1>Base Color Palette</h1>
        <div className={palette}>
          <div className={colorSwatches}>
            <ColorSwatch color="baseBlack" />
            <ColorSwatch color="baseWhite" />
          </div>
          <div className={colorSwatches}>
            {keys(baseMagenta).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
          <div className={colorSwatches}>
            {keys(baseGreen).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
          <div className={colorSwatches}>
            {keys(baseBlue).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
          <div className={colorSwatches}>
            {keys(baseRed).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
          <div className={colorSwatches}>
            {keys(baseYellow).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
          <div className={colorSwatches}>
            {keys(baseGray).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Background Colors</h1>
        <div className={palette}>
          <div className={colorSwatches}>
            {keys(backgroundDefaultColors).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Background Hover Colors</h1>
        <div className={palette}>
          <div className={colorSwatches}>
            {keys(backgroundHoverColors).map((variant) => (
              <ColorSwatch key={variant} color={variant} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Label Colors</h1>
        <div className={palette}>
          <div className={labelSwatches}>
            {keys(labelDefaultColors).map((variant) => (
              <LabelSwatch key={variant} color={variant}>
                Label
              </LabelSwatch>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Label Inactive Colors</h1>
        <div className={palette}>
          <div className={labelSwatches}>
            {keys(labelInactiveColors).map((variant) => (
              <LabelSwatch key={variant} color={variant}>
                Label
              </LabelSwatch>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Label Highlight Colors</h1>
        <div className={palette}>
          <div className={labelSwatches}>
            {keys(labelHighlightColors).map((variant) => (
              <LabelSwatch key={variant} color={variant}>
                Label
              </LabelSwatch>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Label Link Colors</h1>
        <div className={palette}>
          <div className={labelSwatches}>
            {keys(labelLinkColors).map((variant) => (
              <LabelSwatch key={variant} color={variant}>
                Label
              </LabelSwatch>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1>Label Link Visited Colors</h1>
        <div className={palette}>
          <div className={labelSwatches}>
            {keys(labelLinkVisitedColors).map((variant) => (
              <LabelSwatch key={variant} color={variant}>
                Label
              </LabelSwatch>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Themes",
  component: Palettes,
};

type Story = StoryObj<typeof Palettes>;

export const Colors: Story = {};

export default meta;
