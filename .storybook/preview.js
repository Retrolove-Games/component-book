import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story) => (
    <div data-theme={useDarkMode() ? "dark" : "light"}>
      <Story />
    </div>
  ),
];
