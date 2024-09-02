import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ButtonGroup from '.src/components/ButtonGroup';
import { action } from '@storybook/addon-actions';

storiesOf('ButtonGroup', module)
  .add('default', () => (
    <ButtonGroup
      buttons={[
        { label: 'Button 1', onPress: action('Button 1 Pressed') },
        { label: 'Button 2', onPress: action('Button 2 Pressed'), mode: 'outlined' },
        { label: 'Button 3', onPress: action('Button 3 Pressed'), mode: 'text' },
      ]}
    />
  ));
