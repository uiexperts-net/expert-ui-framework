import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Switch from '../Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn<{ checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    args.onChange(e);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const DefaultSwitch = Template.bind({});

DefaultSwitch.args = {
  checked: false,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Switch toggled', e.target.checked);
  },
};
