import type { Meta, StoryObj } from "@storybook/react";
import { Highlight } from ".";

const meta: Meta = {
  title: "Component/Highlight",
  component: Highlight,
};

type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight color="labelHighlightMagenta">Highlight</Highlight>
        <Highlight color="labelHighlightBlue">Highlight</Highlight>
        <Highlight color="labelHighlightGreen">Highlight</Highlight>
        <Highlight color="labelHighlightRed">Highlight</Highlight>
        <Highlight color="labelHighlightYellow">Highlight</Highlight>
      </div>
    );
  },
};

export default meta;
