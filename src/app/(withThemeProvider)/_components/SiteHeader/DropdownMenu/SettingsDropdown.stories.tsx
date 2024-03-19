import type { Meta, StoryObj } from "@storybook/react";
import { SettingsDropdown } from "./SettingsDropdown";
import { ThemeProvider } from "@/components/ThemeProvider";

const meta: Meta = {
  title: "Molecules/SettingsDropdown",
  component: SettingsDropdown,
  decorators: (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
};

type Story = StoryObj<typeof SettingsDropdown>;

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
        <SettingsDropdown />
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
        <SettingsDropdown />
        <SettingsDropdown />
      </div>
    );
  },
};

export default meta;
