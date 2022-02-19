const path = require("path");

const PACKAGES_PATH = "../web-ui/packages/";

module.exports = {
  "@retrolove-games/ui-themes": path.resolve(
    __dirname,
    `${PACKAGES_PATH}/themes/src/index`
  ),
};
