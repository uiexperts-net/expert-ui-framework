
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { name as Text } from '../app.json';

// Import stories
configure(() => {
  require('../src/stories');
}, module);
// Import stories
const req = require.context('../src/stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Configure Storybook
configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({});

// Register Storybook as a React Native app
AppRegistry.registerComponent('TextFieldApp', () => StorybookUIRoot);

export default StorybookUIRoot;
