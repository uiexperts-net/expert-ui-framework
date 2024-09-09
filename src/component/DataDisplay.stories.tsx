import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DataDisplay, { DataDisplayProps } from './DataDisplay';

// Define the Storybook metadata for the DataDisplay component
const meta: Meta<typeof DataDisplay> = {
  title: 'Components/DataDisplay',
  component: DataDisplay,
  argTypes: {
    // Add any actions or control options if needed
  },
};

export default meta;

// Define a template for the DataDisplay component stories
const Template: StoryFn<DataDisplayProps> = (args) => <DataDisplay {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  data: 'This is a sample data item.',
};

// Define a story for array data
export const ArrayData = Template.bind({});
ArrayData.args = {
  title: 'Array Data Title',
  data: ['Item 1', 'Item 2', 'Item 3'],
};
