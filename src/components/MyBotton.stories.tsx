import React from 'react';
import {storiesOf} from '@storybook/react-native';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import MyButton from './MyButton';

storiesOf('MyButton', module)
  .addDecorator((story) => (
    <PaperProvider children={undefined}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {story()}
      </View>
    </PaperProvider>
  ))
  .add('Default', () => <MyButton />);
