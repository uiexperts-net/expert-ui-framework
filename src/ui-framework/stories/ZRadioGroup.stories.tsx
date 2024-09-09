import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZRadioGroup, { ZRadioGroupProps } from '../components/ZRadioGroup';

export default {
    title: 'UI Framework/ZRadioGroup',
    component: ZRadioGroup,
} as Meta<ZRadioGroupProps>;

const Template: StoryFn<ZRadioGroupProps> = (args) => <ZRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.value),
};
