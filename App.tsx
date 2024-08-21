

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native';
// Importing React Native Paper components and the Autocomplete component
import { Provider as PaperProvider } from 'react-native-paper';
import Autocomplete from './src/Autocomplete'; // Ensure this path is correct
const App: React.FC = () => {
  const suggestions: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text variant="headlineLarge">Autocomplete Component Example</Text>
        <Autocomplete suggestions={suggestions} />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
export default App;
