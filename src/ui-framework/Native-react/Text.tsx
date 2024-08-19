import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const MyTextComponent: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text variant="headlineMedium">
        Hello, React Native Paper!
      </Text>
      <Text variant="bodyMedium" style={{ marginTop: 10 }}>
        This is a sample text using React Native Paper in a TypeScript (.tsx) file.
      </Text>
    </View>
  );
};

export default MyTextComponent;
