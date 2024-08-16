// src/ui-framework/material-ui/Select.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZSelect } from './Select';
import { MenuItem } from '@mui/material';

const meta: Meta<typeof ZSelect> = {
  title: 'Material-UI/Select',
  component: ZSelect,
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    children: {
      control: 'object',
      defaultValue: (
        <>
          <MenuItem value="" disabled>Select an option</MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </>
      ),
    },
  },
};

export default meta;

const Template: StoryFn<typeof ZSelect> = (args) => <ZSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  displayEmpty: true,
  children: (
    <>
      <MenuItem value="" disabled>Select an option</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
    </>
  ),
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'option1',
  displayEmpty: true,
  children: (
    <>
      <MenuItem value="" disabled>Select an option</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
    </>
  ),
};

export const WithoutOptions = Template.bind({});
WithoutOptions.args = {
  value: '',
  displayEmpty: true,
  children: (
    <>
      <MenuItem value="" disabled>No options available</MenuItem>
    </>
  ),
};
