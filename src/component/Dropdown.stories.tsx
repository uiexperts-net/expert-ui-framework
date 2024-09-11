import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';

// Define Storybook meta information
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

// Define the story
const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  title: 'Select an Option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (option: string) => console.log(option),
};
