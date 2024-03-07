import type { Meta, StoryObj } from "@storybook/react";
import { Item, ItemImage, ItemLabel } from ".";
import { desktopSize, tabletSize } from "@/themes/utlities/breakpoints.css";

import TypescriptLogo from "../../../../public/assets/logos/TypescriptLogo.svg";
import JSLogo from "../../../../public/assets/logos/JSLogo.svg";
import HTMLLogo from "../../../../public/assets/logos/HTMLLogo.svg";
import CSSLogo from "../../../../public/assets/logos/CSSLogo.svg";

const meta: Meta = {
  title: "Molecules/GridList/Item",
  component: Item,
};

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => {
    return (
      <ul>
        <Item>
          <ItemImage src={TypescriptLogo.src} alt="" />
          <ItemLabel label="TypeScript" color="Blue" />
        </Item>
        <Item>
          <ItemImage src={JSLogo.src} alt="" />
          <ItemLabel label="JavaScript" color="Magenta" />
        </Item>
        <Item>
          <ItemImage src={HTMLLogo.src} alt="" />
          <ItemLabel label="HTML" color="Blue" />
        </Item>
        <Item>
          <ItemImage src={CSSLogo.src} alt="" />
          <ItemLabel label="CSS" color="Green" />
        </Item>
      </ul>
    );
  },
};

export default meta;
