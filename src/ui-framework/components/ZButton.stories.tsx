// src/components/ZButton.stories.tsx

import React from 'react';
import { ZButton } from './ZButton';
import { Meta, StoryFn } from '@storybook/react';


export default {
  title: 'Components/ZButton',
  component: ZButton,
} as Meta<typeof ZButton>;

const Template: StoryFn<typeof ZButton> = (args) => <ZButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Button',
};
