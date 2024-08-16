// src/ui-framework/material-ui/Checkbox.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZCheckbox } from './Checkbox';
import { CheckboxProps } from '@mui/material';

const meta: Meta<typeof ZCheckbox> = {
  title: 'Material-UI/Checkbox',
  component: ZCheckbox,
  argTypes: {
    onChange: { action: 'changed' }, // Automatically handles the onChange event
    color: { control: 'select', options: ['default', 'primary', 'secondary'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

const Template: StoryFn<typeof ZCheckbox> = (args) => <ZCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  color: 'primary',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  color: 'primary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  color: 'primary',
  disabled: true,
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  checked: false,
  color: 'secondary',
  disabled: false,
};
