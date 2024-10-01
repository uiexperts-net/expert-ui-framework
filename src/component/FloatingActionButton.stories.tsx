import React from 'react';
import { StoryFn } from '@storybook/react';
import FloatingActionButton from './FloatingActionButton';

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
};

// Define the type for args
interface FloatingActionButtonArgs {
  icon: string;
  onClick: () => void;
}

const Template: StoryFn<FloatingActionButtonArgs> = (args) => <FloatingActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'fas fa-plus',
  onClick: () => alert('Button Clicked!'),
};

