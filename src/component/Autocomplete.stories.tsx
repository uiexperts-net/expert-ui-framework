import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

const Template: StoryFn<AutocompleteProps> = (args: AutocompleteProps) => <Autocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Cherry'],
};
