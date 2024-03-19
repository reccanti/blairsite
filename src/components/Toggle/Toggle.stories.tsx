import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";
import { useState } from "react";
import { Tile } from "../Tile";
import { Button } from "../Button";
import { semanticColorKeymap } from "@/themes/sprinkles/colors.css";

const meta: Meta = {
  title: "Component/Toggle",
  component: Toggle,
};

type Story = StoryObj<typeof Toggle>;

function ToggleableToggle() {
  const [enabled, setEnabled] = useState(true);

  const onClick = () => {
    setEnabled(!enabled);
  };

  return <Toggle enabled={enabled} onClick={onClick} />;
}

export const Default: Story = {
  render: () => {
    return (
      <>
        <ToggleableToggle />
      </>
    );
  },
};

export const InTiles: Story = {
  render: () => {
    return (
      <>
        <Tile color="Default">
          <ToggleableToggle />
        </Tile>
        <Tile color="Magenta">
          <ToggleableToggle />
        </Tile>
        <Tile color="Blue">
          <ToggleableToggle />
        </Tile>
        <Tile color="Green">
          <ToggleableToggle />
        </Tile>
        <Tile color="Yellow">
          <ToggleableToggle />
        </Tile>
        <Tile color="Red">
          <ToggleableToggle />
        </Tile>
        <Tile color="Gray1">
          <ToggleableToggle />
        </Tile>
        <Tile color="Gray2">
          <ToggleableToggle />
        </Tile>
        <Tile color="Inverted">
          <ToggleableToggle />
        </Tile>
      </>
    );
  },
};

function ButtonToggle({ color }: { color: keyof typeof semanticColorKeymap }) {
  const [enabled, setEnabled] = useState(true);

  const onClick = () => {
    setEnabled(!enabled);
  };

  return (
    <Button color={color} onClick={onClick}>
      <Toggle enabled={enabled} />
    </Button>
  );
}

export const InButtons: Story = {
  render: () => {
    return (
      <>
        <ButtonToggle color="Default" />
        <ButtonToggle color="Magenta" />
        <ButtonToggle color="Blue" />
        <ButtonToggle color="Green" />
        <ButtonToggle color="Yellow" />
        <ButtonToggle color="Red" />
        <ButtonToggle color="Gray1" />
        <ButtonToggle color="Gray2" />
        <ButtonToggle color="Inverted" />
      </>
    );
  },
};
export default meta;
