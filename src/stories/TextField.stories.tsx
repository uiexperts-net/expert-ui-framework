// src/stories/TextField.stories.tsx
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import TextField from '../components/TextField';

storiesOf('TextField', module)
  .add('default', () => {
    const [text, setText] = useState('');
    return (
      <TextField
        label="Username"
        placeholder="Enter your username"
        value={text}
        onChangeText={setText}
      />
    );
  })
  .add('secure text entry', () => {
    const [text, setText] = useState('');
    return (
      <TextField
        label="Password"
        placeholder="Enter your password"
        value={text}
        onChangeText={setText}
        secureTextEntry={true}
      />
    );
  });
