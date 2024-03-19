import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenuToggleButton } from "./ToggleButton";
import CogIcon from "@/components/Icons/CogIcon";

const meta: Meta = {
  title: "Molecules/DropdownMenu/ToggleButton",
  component: DropdownMenuToggleButton,
};

type Story = StoryObj<typeof DropdownMenuToggleButton>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <DropdownMenuToggleButton icon={CogIcon} label="Menu" />
      </div>
    );
  },
};

export default meta;
