import React from 'react';
import { Meta, StoryFn } from '@storybook/react';  // Corrected imports
import ConfirmationPage from './conformation';

export default {
  title: 'ConfirmationPage',
  component: ConfirmationPage,
} as Meta;

const Template: StoryFn = () => <ConfirmationPage />;

export const Default = Template.bind({});

// Ensure the file is a module
export {};
