import type { Meta, StoryObj } from "@storybook/react";
import { List } from ".";

const meta: Meta = {
  title: "Molecules/GridList/List",
  component: List,
};

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => {
    return (
      <List>
        <li>Foo</li>
        <li>Bar</li>
      </List>
    );
  },
};

export default meta;
