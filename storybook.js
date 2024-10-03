// storybook.js
import React from 'react';
import { View } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// Import stories
configure(() => {
  require('./src/components/Autocomplete/Autocomplete.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StorybookUIRoot />
    </View>
  );
}
