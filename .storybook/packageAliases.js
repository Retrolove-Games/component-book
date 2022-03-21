const path = require("path");

const PACKAGES_PATH = "../web-ui/packages/";

const aliases = {};

[
  "themes",
  "hello-world",
  "logo"
].map(alias => {
  aliases[`@retrolove-games/ui-${alias}`] = path.resolve(
    __dirname,
    `${PACKAGES_PATH}/${alias}/src/`
  )
});

module.exports = aliases;
