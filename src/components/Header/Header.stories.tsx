import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { Highlight } from "../Highlight";

const meta: Meta = {
  title: "Component/Header",
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const DifferentHeaderSameSize: Story = {
  render: () => {
    return (
      <>
        <Header renderAs="h1" size={6}>
          Some Content
        </Header>
        <Header renderAs="h2" size={6}>
          Some Content
        </Header>
        <Header renderAs="h3" size={6}>
          Some Content
        </Header>
        <Header renderAs="h4" size={6}>
          Some Content
        </Header>
        <Header renderAs="h5" size={6}>
          Some Content
        </Header>
        <Header renderAs="h6" size={6}>
          Some Content
        </Header>
      </>
    );
  },
};

export const SameHeaderDifferentSize: Story = {
  render: () => {
    return (
      <>
        <Header renderAs="h1" size={6}>
          Some Content
        </Header>
        <Header renderAs="h1" size={5}>
          Some Content
        </Header>
        <Header renderAs="h1" size={4}>
          Some Content
        </Header>
        <Header renderAs="h1" size={3}>
          Some Content
        </Header>
        <Header renderAs="h1" size={2}>
          Some Content
        </Header>
        <Header renderAs="h1" size={1}>
          Some Content
        </Header>
      </>
    );
  },
};

export const WithHighlight: Story = {
  render: () => {
    return (
      <Header renderAs="h1" size={4}>
        Blair Makes{" "}
        <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
      </Header>
    );
  },
};

export default meta;
