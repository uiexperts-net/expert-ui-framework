import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZList, { ZListProps } from '../components/ZList';

export default {
    title: 'UI Framework/ZList',
    component: ZList,
} as Meta<ZListProps>;

const Template: StoryFn<ZListProps> = (args: ZListProps) => <ZList {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: ['Item 1', 'Item 2', 'Item 3'],
};
