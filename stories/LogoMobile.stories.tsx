import React from "react";
import { LogoMobile as Logo } from "../web-ui/packages/logo/src";

export default {
  title: "web-ui/Logo",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const LogoMobile = (args) => <Logo {...args}/>;

LogoMobile.argTypes = {
  size: {
    options: ["small", "medium"],
    defaultValue: "small",
    control: {
      type: "select",
    }
  }
};
