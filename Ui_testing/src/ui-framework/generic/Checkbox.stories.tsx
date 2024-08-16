// src/ui-framework/generic/Checkbox.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ZCheckbox, ZCheckboxProps } from './Checkbox'; // Import ZCheckboxProps

export default {
  title: 'Generic/Checkbox',
  component: ZCheckbox,
} as Meta<typeof ZCheckbox>;

const Template: StoryFn<ZCheckboxProps> = (args) => <ZCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Check me',
  onChange: () => {},
};
