import { ReactNode, JSX } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { typeFonts } from "../sprinkles/fonts.css";
import { typography } from "./fontStories.css";

function Typography({
  renderAs: Element = "span",
  type,
  focus = false,
  children,
}: {
  renderAs?: keyof JSX.IntrinsicElements;
  type: keyof typeof typeFonts;
  focus?: boolean;
  children: ReactNode;
}) {
  return <Element className={typography({ type })}>{children}</Element>;
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
      <Typography type="uiType">ui component text</Typography>
      <Typography type="linkType">link</Typography>
      <Typography type="linkHoverType">hovered link</Typography>
    </>
  );
}

const meta: Meta = {
  title: "Themes",
  component: FontListing,
};

type Story = StoryObj<typeof FontListing>;

export const Fonts: Story = {};

export default meta;
