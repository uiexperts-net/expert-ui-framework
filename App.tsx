import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ButtonGroup from './src/components/ButtonGroup'; // Adjust the path as needed

const App: React.FC = () => {
  const handlePress = (buttonLabel: string) => {
    console.log(`${buttonLabel} Pressed`);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>MyApp</Text>
        </View>
        <ButtonGroup
          buttons={[
            { label: 'Button 1', onPress: () => handlePress('Button 1') },
            { label: 'Button 2', onPress: () => handlePress('Button 2'), mode: 'outlined' },
            { label: 'Button 3', onPress: () => handlePress('Button 3'), mode: 'text' },
          ]}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
