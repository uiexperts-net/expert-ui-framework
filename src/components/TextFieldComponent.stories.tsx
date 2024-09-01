import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TextFieldComponent, { TextFieldProps } from './TextFieldComponent';

export default {
  title: 'Example/TextFieldComponent',
  component: TextFieldComponent,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args: TextFieldProps) => <TextFieldComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: (value: string) => console.log(value),
  placeholder: 'Enter text',
};
