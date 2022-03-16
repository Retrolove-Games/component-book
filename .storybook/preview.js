import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { darkTheme } from "@retrolove-games/ui-themes";

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
    <div className={useDarkMode() ? darkTheme.className : "light"}>
      <Story />
    </div>
  ),
];
