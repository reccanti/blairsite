import type { Meta, StoryObj } from "@storybook/react";
import { Tile } from ".";

const meta: Meta = {
  title: "Component/Tile",
  component: Tile,
};

type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Tile color="Default">Some Content</Tile>
        <Tile color="Magenta">Some Content</Tile>
        <Tile color="Blue">Some Content</Tile>
        <Tile color="Green">Some Content</Tile>
        <Tile color="Yellow">Some Content</Tile>
        <Tile color="Red">Some Content</Tile>
        <Tile color="Gray1">Some Content</Tile>
        <Tile color="Gray2">Some Content</Tile>
        <Tile color="Inverted">Some Content</Tile>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <>
        <Tile color="Default" fullWidth>
          Some Content
        </Tile>
        <Tile color="Magenta" fullWidth>
          Some Content
        </Tile>
        <Tile color="Blue" fullWidth>
          Some Content
        </Tile>
        <Tile color="Green" fullWidth>
          Some Content
        </Tile>
        <Tile color="Yellow" fullWidth>
          Some Content
        </Tile>
        <Tile color="Red" fullWidth>
          Some Content
        </Tile>
        <Tile color="Gray1" fullWidth>
          Some Content
        </Tile>
        <Tile color="Gray2" fullWidth>
          Some Content
        </Tile>
        <Tile color="Inverted" fullWidth>
          Some Content
        </Tile>
      </>
    );
  },
};

export default meta;
