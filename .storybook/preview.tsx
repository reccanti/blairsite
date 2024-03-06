import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import "../src/themes/global.css";
import { ControlledThemeProvider } from "../src/components/ThemeProvider";
import { Tile } from "../src/components/Tile";

const ThemeDecorator: Decorator = (Story, context) => {
  const brightness = context.globals.brightness;
  const contrast = context.globals.contrast;
  const styledLayout = context.globals.layoutMode;

  return (
    <ControlledThemeProvider
      brightness={brightness}
      contrast={contrast}
      styledLayout={styledLayout}
    >
      <Tile color="backgroundDefault">
        <Story />
      </Tile>
    </ControlledThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    brightness: {
      description: "Whether or not light mode or dark mode is enabled",
      defaultValue: "unset",
      toolbar: {
        title: "Brightness Mode",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light Mode" },
          { value: "dark", icon: "circle", title: "Dark Mode" },
          { value: "unset", icon: "subtract", title: "User Preference" },
        ],
      },
    },
    contrast: {
      description: "Whether or not high contrast is enabled",
      defaultValue: "unset",
      toolbar: {
        title: "High Contrast Mode",
        icon: "contrast",
        items: [
          {
            value: "highContrast",
            icon: "contrast",
            title: "High Contrast Mode",
          },
          { value: "unset", icon: "subtract", title: "User Preference" },
        ],
      },
    },
    layoutMode: {
      description: "Whether or not to use simplified layouts and fonts",
      defaultValue: "styled",
      toolbar: {
        title: "Layout Mode",
        icon: "listunordered",
        items: [
          {
            value: "simple",
            icon: "listunordered",
            title: "Simple Layout and Fonts",
          },
          {
            value: "styled",
            icon: "component",
            title: "Styled Layout and fonts",
          },
        ],
      },
    },
    reduceMotion: {
      description: "Whether or not to use reduced motion",
      defaultValue: "unset",
      toolbar: {
        title: "Reduce Motion Mode",
        icon: "play",
        items: [
          {
            value: "reduced",
            icon: "play",
            title: "Reduce Motion",
          },
          {
            value: "unset",
            icon: "subtract",
            title: "User Preference",
          },
        ],
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
