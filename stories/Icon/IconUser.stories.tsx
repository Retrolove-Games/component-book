import React from "react";
import { IconUser as Icon } from "../../web-ui/packages/icon/src";

export default {
  title: "web-ui/Icon user",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const LogoDesktop = (args) => <Icon {...args}/>;

LogoDesktop.argTypes = {
  size: {
    options: ["small", "medium"],
    defaultValue: "small",
    control: {
      type: "select",
    }
  },
  color: {
    options: ["default", "red", "neonBlue"],
    defaultValue: "default",
    control: {
      type: "select",
    }
  }
};
