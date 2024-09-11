import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AutoComplete from '../components/AutoComplete';
import { action } from '@storybook/addon-actions';

const suggestions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Pineapple', value: 'pineapple' },
];

storiesOf('AutoComplete', module)
  .add('default', () => (
    <AutoComplete
      suggestions={suggestions}
      onSelect={action('Item selected')}
    />
  ));
