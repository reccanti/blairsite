import type { Meta, StoryObj } from "@storybook/react";
import { NavDropdown } from "./NavDropdown";

const meta: Meta = {
  title: "Molecules/NavDropdown",
  component: NavDropdown,
};

type Story = StoryObj<typeof NavDropdown>;

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
