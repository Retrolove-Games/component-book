import React from "react";
import { GridPresenter } from "../../src/GridPresenter";
import {
  IconUser as IconUserComponent,
  IconClose as IconCloseComponent,
  IconBasket as IconBasketComponent,
  IconFacebook as IconFacebookComponent,
  IconTwitter as IconTwitterComponent,
  IconMoon as IconMoonComponent,
  IconSun as IconSunComponent,
  SIZE_VARIANTS
} from "../../web-ui/packages/icon/src";

export default {
  title: "web-ui/Icon",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const IconUser = (args) => <IconUserComponent {...args} />;

IconUser.argTypes = {
  size: {
    options: Object.keys(SIZE_VARIANTS),
    defaultValue: "small",
    control: {
      type: "select",
    },
  },
  color: {
    options: ["default", "red", "neonBlue"],
    defaultValue: "default",
    control: {
      type: "select",
    },
  },
};

export const Icons = (args) => (
  <GridPresenter columns={8}>
    <IconUserComponent />
    <IconCloseComponent />
    <IconBasketComponent />
    <IconFacebookComponent />
    <IconTwitterComponent />
    <IconMoonComponent />
    <IconSunComponent />
  </GridPresenter>
);
