import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { keys } from "../../lib/utils/records";
import { semanticColorKeymap } from "@/themes/sprinkles/colors.css";

const meta: Meta = {
  title: "Component/Button",
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const AsButton: Story = {
  render: () => {
    const colors = keys(semanticColorKeymap);
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

export const AsLink: Story = {
  render: () => {
    const colors = keys(semanticColorKeymap);
    return (
      <>
        {colors.map((color) => (
          <Button href="#" key={color} color={color}>
            My Button
          </Button>
        ))}
      </>
    );
  },
};

export default meta;
