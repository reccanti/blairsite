import type { Meta, StoryObj } from "@storybook/react";
import { List, Item, ItemImage, ItemLabel } from ".";

import TypescriptLogo from "../../../../public/assets/logos/TypescriptLogo.svg";
import JSLogo from "../../../../public/assets/logos/JSLogo.svg";
import HTMLLogo from "../../../../public/assets/logos/HTMLLogo.svg";
import CSSLogo from "../../../../public/assets/logos/CSSLogo.svg";

const meta: Meta = {
  title: "Molecules/GridList/List",
  component: List,
};

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => {
    return (
      <List>
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
      </List>
    );
  },
};

export default meta;
