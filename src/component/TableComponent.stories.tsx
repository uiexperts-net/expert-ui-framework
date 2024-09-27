import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableComponent, { TableComponentProps } from './TableComponent';

// Define the Storybook metadata for the TableComponent
const meta: Meta<typeof TableComponent> = {
  title: 'Components/TableComponent',
  component: TableComponent,
  argTypes: {
    // Add actions or controls if needed (e.g., for header and data customization)
  },
};

export default meta;

// Define a template for the TableComponent stories
const Template: StoryFn<TableComponentProps> = (args) => <TableComponent {...args} />;

// Define the default story with sample table data
export const Default = Template.bind({});
Default.args = {
  title: 'Employee Data',
  headers: ['ID', 'Name', 'Age'],
  data: [
    [1, 'John Doe', 28],
    [2, 'Jane Smith', 32],
    [3, 'Mark Taylor', 25],
  ],
};

// Define a story with custom table data
export const CustomData = Template.bind({});
CustomData.args = {
  title: 'Custom Table',
  headers: ['Product', 'Price', 'Quantity'],
  data: [
    ['Laptop', 1200, 5],
    ['Phone', 800, 10],
    ['Tablet', 600, 7],
  ],
};
