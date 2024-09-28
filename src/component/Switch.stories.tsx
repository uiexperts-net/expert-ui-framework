import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn<{ isOn: boolean; onToggle: () => void }> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOn: false,
  onToggle: () => console.log('Switch toggled!'),
};
