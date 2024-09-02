// storybook/index.js
import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import './manager'; // Import your Storybook addons configuration

// Import stories
configure(() => {
  require('../src/stories/TransferList.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('TransferListApp', () => StorybookUIRoot);
export default StorybookUIRoot;
