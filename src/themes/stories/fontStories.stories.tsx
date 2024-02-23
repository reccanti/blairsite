import { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { typeFonts } from "../sprinkles/fonts.css";
import { typography } from "./fontStories.css";

function Typography({
  type,
  children,
}: {
  type: keyof typeof typeFonts;
  children: ReactNode;
}) {
  return <span className={typography({ type })}>{children}</span>;
}

function FontListing() {
  return (
    <>
      <Typography type="bodyType">body</Typography>
      <Typography type="header6Type">heading 6</Typography>
      <Typography type="header5Type">heading 5</Typography>
      <Typography type="header4Type">heading 4</Typography>
      <Typography type="header3Type">heading 3</Typography>
      <Typography type="header2Type">heading 2</Typography>
      <Typography type="header1Type">heading 1</Typography>
    </>
  );
}

const meta: Meta = {
  title: "Themes",
  component: FontListing,
  decorators: (Story) => (
    <div>
      <Story />
    </div>
  ),
};

type Story = StoryObj<typeof FontListing>;

export const Fonts: Story = {};

export default meta;
