// src/ui-framework/generic/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZButton } from './Button';

// Define the default export with metadata
export default {
  title: 'Generic/Button',  // Storybook category and component name
  component: ZButton,
  argTypes: {
    onClick: { action: 'clicked' },  // Provides an action logger for the onClick event
  },
} as Meta<typeof ZButton>;

// Define a template for the stories
const Template: StoryFn<typeof ZButton> = (args) => <ZButton {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  children: 'Click me',  // Default text for the button
};

// Additional stories
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  className: 'primary-button',  // You can add custom class names or styles
};

// You can add more stories with different variations of the button
