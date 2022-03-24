import React from "react";
import { LogoDesktop as Logo } from "../../web-ui/packages/logo/src";

export default {
  title: "web-ui/Logo",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const LogoDesktop = (args) => <Logo {...args}/>;

LogoDesktop.argTypes = {
  size: {
    options: ["small", "medium"],
    defaultValue: "small",
    control: {
      type: "select",
    }
  }
};
