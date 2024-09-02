import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
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

  },
});
const App = () => {
  // State for selected radio button value
  const [checked, setChecked] = useState<string>('first');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.radioContainer}>
        <Text style={styles.label}>Choose an option:</Text>
        <View style={styles.radioItem}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.radioText}>First Option</Text>
        </View>
        <View style={styles.radioItem}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.radioText}>Second Option</Text>
        </View>
      </View>

      <Button mode="contained" onPress={() => alert(`You selected: ${checked}`)}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  radioContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioText: {
    fontSize: 16,
  },
});

export default App;


export default App;
