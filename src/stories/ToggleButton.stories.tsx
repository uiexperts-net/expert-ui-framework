// src/stories/ToggleButton.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToggleButton from '../components/ToggleButton';

storiesOf('ToggleButton', module)
  .add('Default', () => (
    <ToggleButton onToggle={(isOn) => console.log('Toggled:', isOn)} />
  ));
