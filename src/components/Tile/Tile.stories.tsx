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
        <Tile color="backgroundDefault">Some Content</Tile>
        <Tile color="backgroundMagenta">Some Content</Tile>
        <Tile color="backgroundBlue">Some Content</Tile>
        <Tile color="backgroundGreen">Some Content</Tile>
        <Tile color="backgroundYellow">Some Content</Tile>
        <Tile color="backgroundRed">Some Content</Tile>
        <Tile color="backgroundGray1">Some Content</Tile>
        <Tile color="backgroundGray2">Some Content</Tile>
        <Tile color="backgroundInverted">Some Content</Tile>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <>
        <Tile color="backgroundDefault" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundMagenta" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundBlue" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundGreen" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundYellow" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundRed" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundGray1" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundGray2" fullWidth>
          Some Content
        </Tile>
        <Tile color="backgroundInverted" fullWidth>
          Some Content
        </Tile>
      </>
    );
  },
};

export default meta;
