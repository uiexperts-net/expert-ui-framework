// src/component/RadioButton.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <RadioButton
      {...args}
      checked={selected === args.value}
      onChange={(e) => setSelected(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  label: 'Option 1',
  name: 'group1',
  value: 'option1',
};
