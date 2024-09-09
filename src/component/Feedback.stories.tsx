import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Feedback, { FeedbackProps } from './Feedback';

// Define the Storybook metadata for the Feedback component
const meta: Meta<typeof Feedback> = {
  title: 'Components/Feedback',
  component: Feedback,
  argTypes: {
    // Add any actions or control options if needed
  },
};

export default meta;

// Define a template for the Feedback component stories
const Template: StoryFn<FeedbackProps> = (args) => <Feedback {...args} />;

// Define the default story for success feedback
export const Success = Template.bind({});
Success.args = {
  message: 'Operation was successful!',
  type: 'success',
};

// Define a story for error feedback
export const Error = Template.bind({});
Error.args = {
  message: 'There was an error!',
  type: 'error',
};

// Define a story for info feedback
export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
};
