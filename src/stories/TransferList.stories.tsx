// src/stories/TransferList.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TransferList from '../components/TransferList';

const items = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

storiesOf('TransferList', module)
  .add('Default', () => (
    <TransferList
      items={items}
      onTransfer={(selected) => console.log('Transferred:', selected)}
    />
  ));
