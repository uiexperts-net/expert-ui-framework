import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import TextField, { TextFieldProps } from '../TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return (
    <TextField
      {...args}
      value={value} // Use only one 'value' prop assignment
      onChange={handleChange}
    />
  );
};

export const DefaultTextField = Template.bind({});

DefaultTextField.args = {
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Text field value changed:', e.target.value);
  },
};
