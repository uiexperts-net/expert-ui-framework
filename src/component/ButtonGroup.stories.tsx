import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: ['Button 1', 'Button 2', 'Button 3'],
  onClick: (button) => alert(`${button} clicked`),
};
