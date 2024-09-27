
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./storybook').then(({ default: StorybookUI }) => {
    AppRegistry.registerComponent(appName, () => StorybookUI);
  });
} else {
  AppRegistry.registerComponent(appName, () => App);
}
