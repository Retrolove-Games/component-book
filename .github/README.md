<img src="logo-retrolove-shop.svg" width="200">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# component-book

This repository uses submodule to display [web-ui](https://github.com/Retrolove-Games/web-ui) components.

## Initialize repository

```bash
git clone git@github.com:Retrolove-Games/component-book.git
npm run update-submodules
```

## Run storybook

```bash
npm run storybook
```

## Updating submodule with packages

```bash
npm run update-submodules
```

If there are any new packages, you need to map them:

```js
  // @retrolove-games/ui-themes
  "@retrolove-games/ui-themes": path.resolve(
    __dirname,
    `${PACKAGES_PATH}/themes/src/[file name or nothing if index exists]`
  ),
```

In the file: `.storybook/packageAliases.js`.