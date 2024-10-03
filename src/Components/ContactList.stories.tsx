import React from 'react';
import { StoryFn, Meta } from '@storybook/react'; // Correct Storybook imports
import Hmgrp from './ContactList'; // Import your component

// Default export with metadata
export default {
  title: 'Components/Hmgrp',
  component: Hmgrp,
  parameters: {
    // You can add parameters here to customize the Storybook UI for this story
    controls: { expanded: true },
  },
} as Meta<typeof Hmgrp>;

// Template for rendering the component
const Template: StoryFn<typeof Hmgrp> = (args) => <Hmgrp {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  // Add any default props you'd like to pass to Hmgrp in the default story
};
