import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { colorVariants } from "./Button.css";
import { keys } from "../../lib/utils/records";

const meta: Meta = {
  title: "Component/Button",
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const AsButton: Story = {
  render: () => {
    const colors = keys(colorVariants);
    return (
      <>
        {colors.map((color) => (
          <Button key={color} color={color}>
            My Button
          </Button>
        ))}
      </>
    );
  },
};

export default meta;
