import React, { ChangeEvent, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextFieldComponent from '../components/TextFieldComponent';

export default {
  title: 'Components/TextField',
  component: TextFieldComponent,
} as Meta<typeof TextFieldComponent>;

const Template: StoryFn<typeof TextFieldComponent> = (args) => {
  const [value, setValue] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  return <TextFieldComponent {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Label',
  placeholder: 'Type here...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Field',
  value: '',
  placeholder: 'Cannot type here',
  disabled: true,
};
