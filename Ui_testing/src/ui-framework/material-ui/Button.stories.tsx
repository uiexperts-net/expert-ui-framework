// src/ui-framework/material-ui/Button.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZButton } from './Button';
import { ButtonProps } from '@mui/material';

const meta: Meta<typeof ZButton> = {
  title: 'Material-UI/Button',
  component: ZButton,
  argTypes: {
    onClick: { action: 'clicked' }, // Automatically handles the onClick event
    variant: { control: 'select', options: ['text', 'contained', 'outlined'] },
    color: { control: 'select', options: ['primary', 'secondary', 'inherit'] },
  },
};

export default meta;

const Template: StoryFn<typeof ZButton> = (args) => <ZButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'contained',
  color: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
  color: 'secondary',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text Button',
  variant: 'text',
  color: 'inherit',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'contained',
  color: 'primary',
  disabled: true,
};
