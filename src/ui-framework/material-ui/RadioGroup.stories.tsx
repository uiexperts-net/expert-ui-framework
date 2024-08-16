// src/ui-framework/material-ui/RadioGroup.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZRadioGroup } from './RadioGroup';

const meta: Meta<typeof ZRadioGroup> = {
  title: 'Material-UI/RadioGroup',
  component: ZRadioGroup,
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' }, // Automatically handles the onChange event
    options: {
      control: 'object',
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    },
  },
};

export default meta;

const Template: StoryFn<typeof ZRadioGroup> = (args) => <ZRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'option1',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const SelectedOption = Template.bind({});
SelectedOption.args = {
  value: 'option2',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const NoOptions = Template.bind({});
NoOptions.args = {
  value: '',
  options: [],
};
