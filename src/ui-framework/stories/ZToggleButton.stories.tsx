// src/ui-framework/stories/ZToggleButton.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ZToggleButton, { ZToggleButtonProps } from '../components/ZToggleButton';

export default {
    title: 'Components/ZToggleButton',
    component: ZToggleButton,
} as Meta;

const Template: StoryFn<ZToggleButtonProps> = (args) => <ZToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'selected', // Use a string value here
    onChange: (event: React.MouseEvent<HTMLElement>, value: string) => console.log(value),
};
