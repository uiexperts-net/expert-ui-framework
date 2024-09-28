import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioGroup from './RadioGroup';

type RadioGroupProps = {
  options: string[];
  name: string;
  onChange: (value: string) => void;
};

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>;

const Template: StoryFn<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  name: 'exampleRadioGroup',
  onChange: (value: string) => console.log(value),
};
