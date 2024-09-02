import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZTextField, { ZTextFieldProps } from '../components/ZTextField';

export default {
    title: 'UI Framework/ZTextField',
    component: ZTextField,
} as Meta<ZTextFieldProps>;

const Template: StoryFn<ZTextFieldProps> = (args) => <ZTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Text Field',
    value: '',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.value),
};
