import React from 'react';
import { Logo, LogoDesktop, LogoMobile } from "@retrolove-games/ui-logo";

export default {
  title: 'web-ui/Logo',
  component: LogoDesktop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LogoDesktop />;
const TemplateMobile = (args) => <LogoMobile />;

export const Primary = Template.bind({});
export const Secondary = TemplateMobile.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
