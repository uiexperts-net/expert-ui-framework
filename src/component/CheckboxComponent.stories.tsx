import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxComponent, { CheckboxProps } from './CheckboxComponent';

export default {
  title: 'Example/CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta<typeof CheckboxComponent>;

// Typing the args parameter with CheckboxProps
const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => <CheckboxComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
};
