import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ZSwitch, { ZSwitchProps } from '../components/ZSwitch';

export default {
    title: 'UI Framework/ZSwitch',
    component: ZSwitch,
} as Meta<ZSwitchProps>;

const Template: StoryFn<ZSwitchProps> = (args) => <ZSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.checked),
};
