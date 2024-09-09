import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DropdownComponent, { DropdownProps } from './DropdownComponent';

export default {
  title: 'Example/DropdownComponent',
  component: DropdownComponent,
} as Meta;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => <DropdownComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  onSelect: (value: string) => console.log(value),
  placeholder: 'Select an option',
};
