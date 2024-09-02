// src/stories/FloatingActionButton.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FloatingActionButton from '../components/FloatingActionButton';
import { action } from '@storybook/addon-actions';

storiesOf('FloatingActionButton', module)
  .add('Default', () => (
    <FloatingActionButton
      onPress={action('Button Pressed')}
      icon="plus" // Example icon
    />
  ));
