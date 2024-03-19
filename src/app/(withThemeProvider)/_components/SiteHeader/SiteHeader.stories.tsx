import type { Meta, StoryObj } from "@storybook/react";
import { SiteHeader } from ".";
import { ThemeProvider } from "@/components/ThemeProvider";

const meta: Meta = {
  title: "Molecules/SiteHeader",
  component: SiteHeader,
};

type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <SiteHeader />
      </ThemeProvider>
    );
  },
};

export default meta;
