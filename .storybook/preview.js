import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme } from "@retrolove-games/ui-themes";
import { DocsContainer } from './DocsContainer';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);

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
    // theme: themes.dark,
    container: DocsContainer,
  },
};

export const decorators = [
  (Story) => (
    <div className={useDarkMode() ? darkTheme.className : "light"}>
      <Story />
    </div>
  ),
];
