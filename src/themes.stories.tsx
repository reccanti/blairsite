import type { Meta, StoryObj } from "@storybook/react";
import { lightClass } from "./global.css";
import { colorStyle } from "./themes.css";
import { style } from "@vanilla-extract/css";

const Swatch = ({ colorClass }: { colorClass: string }) => (
  <div className={colorClass} />
);

const meta: Meta = {
  title: "Themes",
  decorators: (Story) => {
    return (
      <div className=".light">
        <Swatch colorClass={colorStyle} />
      </div>
    );
  },
};

export default meta;
