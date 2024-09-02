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
// Import stories
const req = require.context('../src/stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Configure Storybook
configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({});

// Register Storybook as a React Native app
AppRegistry.registerComponent('SwitchSliderApp', () => StorybookUIRoot);
configure(() => {
  require('../src/stories/FloatingActionButton.stories');
}, module);
// Import stories
configure(() => {
  require('../src/stories/ToggleButton.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('TransferListApp', () => StorybookUIRoot);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('TransferListApp', () => StorybookUIRoot);
configure(() => {
  require('../src/stories/RatingButton.stories.tsx');
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);
configure(() => {
  require('../src/stories/TransferList.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('TransferListApp', () => StorybookUIRoot);
// Configure Storybook
configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({});

// Register Storybook as a React Native app
AppRegistry.registerComponent('TextFieldApp', () => StorybookUIRoot);
export default StorybookUIRoot;
