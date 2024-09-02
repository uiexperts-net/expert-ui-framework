import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZDropdown, { ZDropdownProps } from '../components/ZDropdown';
import { SelectChangeEvent } from '@mui/material/Select';

export default {
    title: 'UI Framework/ZDropdown',
    component: ZDropdown,
} as Meta<ZDropdownProps>;

const Template: StoryFn<ZDropdownProps> = (args: ZDropdownProps) => <ZDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Select an Option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
    onChange: (event: SelectChangeEvent<string>) => console.log(event.target.value),
};
