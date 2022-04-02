import React from "react";
import { Switch as SwitchComponent } from "../../web-ui/packages/switch/src";
import { IconSun, IconMoon } from "../../web-ui/packages/icon/src";

export default {
  title: "web-ui/Switch",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Switch = (args) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <SwitchComponent
      leftIcon={<IconMoon size="xsmall" />}
      rightIcon={<IconSun size="xsmall" />}
      isOn={toggle}
      handleToggle={() => setToggle(!toggle)}
      {...args}
    />
  );
};

Switch.argTypes = {
  size: {
    options: ["small", "medium"],
    defaultValue: "small",
    control: {
      type: "select",
    },
  },
  id: {
    defaultValue: "test",
    control: {
      type: "text",
    },
  },
};
