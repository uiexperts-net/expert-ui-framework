// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from './src/components/TextField';

const App = () => {
  return (
    <View style={styles.container}>
      <TextField
        label="Username"
        placeholder="Enter your username"
        value=""
        onChangeText={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
