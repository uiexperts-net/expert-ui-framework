// src/ui-framework/generic/Text.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Generic/Text',
  component: Text,
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Sample Text',
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
};

export const LongText = Template.bind({});
LongText.args = {
  value: 'This is a longer text to demonstrate how the component handles more content.',
};
