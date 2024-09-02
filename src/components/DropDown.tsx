import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import DropDown from './src/components/DropDown'; // Adjust the path as needed

const App: React.FC = () => {
  const handleSelect = (value: any) => {
    console.log(`Selected value: ${value}`);
  };

  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>DropDown App</Text>
        </View>
        <DropDown items={items} onSelect={handleSelect} />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
