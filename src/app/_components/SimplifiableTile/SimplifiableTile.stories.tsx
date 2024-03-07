import type { Meta, StoryObj } from "@storybook/react";
import { SimplifiableTile } from ".";

const meta: Meta = {
  title: "Molecules/SimplifiableTile",
  component: SimplifiableTile,
};

type Story = StoryObj<typeof SimplifiableTile>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <SimplifiableTile color="Default">Some Content</SimplifiableTile>
        <SimplifiableTile color="Magenta">Some Content</SimplifiableTile>
        <SimplifiableTile color="Blue">Some Content</SimplifiableTile>
        <SimplifiableTile color="Green">Some Content</SimplifiableTile>
        <SimplifiableTile color="Yellow">Some Content</SimplifiableTile>
        <SimplifiableTile color="Red">Some Content</SimplifiableTile>
        <SimplifiableTile color="Gray1">Some Content</SimplifiableTile>
        <SimplifiableTile color="Gray2">Some Content</SimplifiableTile>
        <SimplifiableTile color="Inverted">Some Content</SimplifiableTile>
      </>
    );
  },
};

export default meta;
