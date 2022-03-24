const path = require("path");

const PACKAGES_PATH = "../web-ui/packages/";

const aliases = {};

// React components
[
  "themes",
  "hello-world",
  "logo",
  "buton"
].map(alias => {
  aliases[`@retrolove-games/ui-${alias}`] = path.resolve(
    __dirname,
    `${PACKAGES_PATH}/${alias}/src/`
  )
});

// Other
aliases["@retrolove-games/css-reset"] = path.resolve(
  __dirname,
  `${PACKAGES_PATH}/css-reset/`
);

module.exports = aliases;
