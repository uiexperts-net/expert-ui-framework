import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DropDown from '../components/DropDown';
import { action } from '@storybook/addon-actions';

const items = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

storiesOf('DropDown', module)
  .add('default', () => (
    <DropDown
      items={items}
      onSelect={action('Item selected')}
    />
  ));
