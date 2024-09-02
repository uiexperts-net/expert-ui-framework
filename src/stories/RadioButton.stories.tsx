import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import MyRadioButton from '../components/RadioButton';
const RadioButtonStory = () => {
  const [checked, setChecked] = useState('first');

  return (
    <>
      <MyRadioButton
        value="first"
        label="First Option"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <MyRadioButton
        value="second"
        label="Second Option"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </>
  );
};

storiesOf('MyRadioButton', module)
  .add('default', () => <RadioButtonStory />);
