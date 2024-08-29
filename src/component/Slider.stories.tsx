import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider from './Slider';

// Define Storybook meta information
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
};

export default meta;

// Define the story
const Template: StoryFn<typeof Slider> = (args) => <Slider {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onChange: (value: number) => console.log(value),
};
