import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, Item, Menu } from "./DropdownMenu";
import { Button } from "@/components/Button";
import { DropdownMenuToggleButton } from "./ToggleButton";
import MenuIcon from "@/components/Icons/MenuIcon";
import { NavDropdown } from "./NavDropdown";

const meta: Meta = {
  title: "Molecules/NavDropdown",
  component: NavDropdown,
};

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <NavDropdown />
      </div>
    );
  },
};

export const MultipleMenus: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <NavDropdown />
        <NavDropdown />
      </div>
    );
  },
};

export default meta;
