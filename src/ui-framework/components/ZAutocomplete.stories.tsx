import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZAutocomplete, ZAutocompleteProps } from './ZAutocomplete';

export default {
  title: 'Components/ZAutocomplete',
  component: ZAutocomplete,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Select an option',
    },
    options: {
      control: { type: 'object' }, // Changed from 'array' to 'object'
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
  },
} as Meta<typeof ZAutocomplete>;

const Template: StoryFn<typeof ZAutocomplete> = (args) => <ZAutocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
};
