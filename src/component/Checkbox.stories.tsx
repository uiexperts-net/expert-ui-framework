import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

// Define the Storybook metadata for the Checkbox component
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

// Define a template for the Checkbox component stories
const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  label: 'Accept terms and conditions',
  checked: false,
};

