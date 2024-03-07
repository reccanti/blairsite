import type { Meta, StoryObj } from "@storybook/react";
import { GridListItem } from ".";

import TypescriptLogo from "../../../../public/assets/logos/TypescriptLogo.svg";

const meta: Meta = {
  title: "Molecules/GridList/Item",
  component: GridListItem,
};

type Story = StoryObj<typeof GridListItem>;

export const Default: Story = {
  render: () => {
    return <GridListItem img={TypescriptLogo} label="TypeScript" />;
  },
};

export default meta;
