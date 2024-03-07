import type { Meta, StoryObj } from "@storybook/react";
import { GridList } from ".";

const meta: Meta = {
  title: "Molecules/GridList/List",
  component: GridList,
};

type Story = StoryObj<typeof GridList>;

export const Default: Story = {
  render: () => {
    return (
      <GridList>
        <li>Foo</li>
        <li>Bar</li>
      </GridList>
    );
  },
};

export default meta;
