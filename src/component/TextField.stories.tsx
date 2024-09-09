// src/component/TextField.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField'; // Ensure correct import

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',  // Provide a default value
  placeholder: 'Enter text here',  // Provide a default placeholder
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};
