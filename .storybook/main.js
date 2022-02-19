const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      "@retrolove-games/ui-themes": path.resolve(
        __dirname,
        "../web-ui/packages/themes/src/index"
      ),
    };

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
              exportLocalsConvention: "camelCase",
            },
          },
        },
        /*"sass-loader",
        {
          loader: "sass-resources-loader",
          options: {
            resources: [
              path.resolve(__dirname, '../web-ui/packages/themes/src/dark.scss'),
              path.resolve(__dirname, '../web-ui/packages/themes/src/light.scss'),
            ]
          }
        } */
      ],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
