const path = require("path");

const PACKAGES_PATH = "../web-ui/packages/";

module.exports = {
  // @retrolove-games/ui-themes
  "@retrolove-games/ui-themes": path.resolve(
    __dirname,
    `${PACKAGES_PATH}/themes/src/`
  ),
  // @retrolove-games/ui-hello-world
  "@retrolove-games/ui-hello-world": path.resolve(
    __dirname,
    `${PACKAGES_PATH}/hello-world/src/`
  ),
};
