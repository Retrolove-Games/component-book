import React from "react";
import { Button as  ButtonDefault } from "../../web-ui/packages/button/src";

export default {
  title: "web-ui/Button",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Button = (args) => <ButtonDefault {...args}/>;

Button.args = { children: 'Submit' };

Button.argTypes = {
  as: {
    options: ["a", "button"],
    defaultValue: "button",
    control: {
      type: "select",
    }
  },
  color: {
    options: ["red", "neonBlue"],
    defaultValue: "neonBlue",
    control: {
      type: "select",
    }
  }
};
