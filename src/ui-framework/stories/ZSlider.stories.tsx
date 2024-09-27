import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZSlider, { ZSliderProps } from '../components/ZSlider';

export default {
    title: 'UI Framework/ZSlider',
    component: ZSlider,
} as Meta<ZSliderProps>;

const Template: StoryFn<ZSliderProps> = (args) => <ZSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 50,
    onChange: (event: Event, newValue: number | number[]) => console.log(newValue),
};
