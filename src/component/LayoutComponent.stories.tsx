import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LayoutComponent, { LayoutProps } from './LayoutComponent';

// Define the Storybook metadata for the LayoutComponent
const meta: Meta<typeof LayoutComponent> = {
  title: 'Components/LayoutComponent',
  component: LayoutComponent,
};

export default meta;

// Define a template for the LayoutComponent stories
const Template: StoryFn<LayoutProps> = (args) => {
  // useState hook to track the count value
  const [count, setCount] = useState(0);

  // Function to increment the count when button is clicked
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <LayoutComponent
      {...args}
      content={
        <div>
          {args.content}
          {/* Button that triggers the count increment */}
          <button className="btn btn-primary mt-2" onClick={handleClick}>
            Click Me
          </button>
          {/* Display the updated count */}
          <p>Button clicked {count} times</p>
        </div>
      }
    />
  );
};

// Define the default story
export const Default = Template.bind({});
Default.args = {
  header: <h1>Header Section</h1>,
  content: <p>This is the main content area.</p>,
  footer: <p>Footer Section</p>,
};
