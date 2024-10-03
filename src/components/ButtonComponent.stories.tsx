import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ButtonComponent, { ButtonProps } from './ButtonComponent';

export default {
  title: 'Example/ButtonComponent',
  component: ButtonComponent,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <ButtonComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  onClick: () => console.log('Button clicked!'),
  disabled: false,
};
