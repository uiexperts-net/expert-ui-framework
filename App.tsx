// App.tsx
import React from 'react';
import { View, Text } from 'react-native';
import TransferList from './src/components/TransferList';

const items = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>My Transfer List App</Text>
    <TransferList items={items} onTransfer={(selected) => console.log('Transferred:', selected)} />
  </View>
);

export default App;
