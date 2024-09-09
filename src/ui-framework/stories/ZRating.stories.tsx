import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZRating, { ZRatingProps } from '../components/ZRating';

export default {
    title: 'UI Framework/ZRating',
    component: ZRating,
} as Meta<ZRatingProps>;

const Template: StoryFn<ZRatingProps> = (args) => <ZRating {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 3,
    onChange: (event: React.ChangeEvent<{}>, newValue: number | null) => console.log(newValue),
};
