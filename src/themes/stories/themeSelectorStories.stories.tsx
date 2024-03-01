import { ReactNode, JSX } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { typeFonts } from "../sprinkles/fonts.css";
import { typography } from "./fontStories.css";
import { Header } from "../../components/Header";
import { darkOnlyClass, simpleOnlyClass } from "./themeSelectorStories.css";

const meta: Meta = {
  title: "Themes",
};

type Story = StoryObj;

export const SimpleOnlyStyle: Story = {
  render: () => (
    <Header size={5} renderAs="h6">
      View in Simple Layout Mode to see the message:{" "}
      <span className={simpleOnlyClass}>Howdy {"<3"}</span>
    </Header>
  ),
};

export const DarkOnlyStyle: Story = {
  render: () => (
    <Header size={5} renderAs="h6">
      View in Dark Mode to see the message:{" "}
      <span className={darkOnlyClass}>Boo!</span>
    </Header>
  ),
};

export default meta;
