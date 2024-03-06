import type { Meta, StoryObj } from "@storybook/react";
import { SiteHeader } from ".";

const meta: Meta = {
  title: "Molecules/SiteHeader",
  component: SiteHeader,
};

type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  render: () => {
    return <SiteHeader />;
  },
};

export default meta;
