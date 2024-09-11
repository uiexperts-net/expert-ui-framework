import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Surface, { SurfaceProps } from './Surface';

// Define the Storybook metadata for the Surface component
const meta: Meta<typeof Surface> = {
  title: 'Components/Surface',
  component: Surface,
  argTypes: {
    // Optionally define actions or controls for your props
    // Example: onClick: { action: 'clicked' },
  },
};

export default meta;

// Define a template for the Surface component stories
const Template: StoryFn<SurfaceProps> = (args) => <Surface {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  color: 'white',
  width: '100%',
  height: '100%',
  children: 'Default Surface',
};

// Define additional stories if needed
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  color: 'lightblue',
  width: '300px',
  height: '200px',
  children: 'Custom Styled Surface',
};
