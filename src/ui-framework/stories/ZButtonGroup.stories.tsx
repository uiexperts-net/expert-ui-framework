import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZButtonGroup from '../components/ZButtonGroup';

export default {
    title: 'UI Framework/ZButtonGroup',
    component: ZButtonGroup,
} as Meta;

const Template: StoryFn = (args) => <ZButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    buttons: ['Button 1', 'Button 2', 'Button 3'],
};
