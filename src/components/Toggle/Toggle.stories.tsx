import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";
import { useState } from "react";

const meta: Meta = {
  title: "Component/Toggle",
  component: Toggle,
};

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState(true);

    const onClick = () => {
      setActive(!active);
    };

    return (
      <>
        <Toggle active={active} onClick={onClick} />
      </>
    );
  },
};

export default meta;
