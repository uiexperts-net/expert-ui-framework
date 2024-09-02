// App.tsx
import React from 'react';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { Checkbox, Button } from 'react-native-paper';
import TextField from './src/components/TextField';
import TransferList from './src/components/TransferList';
import ButtonGroup from './src/components/ButtonGroup';
import DropDown from './src/components/DropDown'; 
import CheckBox from './src/components/CheckBox';
import RatingButton from './src/components/RatingButton';
import SwitchSlider from './src/components/SwitchSlider';
import ToggleButton from './src/components/ToggleButton';
import FloatingButton from './src/components/FloatingButton';
const items = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>My Transfer List App</Text>
    <TransferList items={items} onTransfer={(selected) => console.log('Transferred:', selected)} />
  </View>
);

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
const App = () => {
  // State for checkbox selections
  const [firstChecked, setFirstChecked] = useState<boolean>(false);
  const [secondChecked, setSecondChecked] = useState<boolean>(false);
  const [thirdChecked, setThirdChecked] = useState<boolean>(false);

  // Function to handle the submission of selected options
  const handleSubmit = () => {
    let selectedOptions = [];

    if (firstChecked) selectedOptions.push('Option 1');
    if (secondChecked) selectedOptions.push('Option 2');
    if (thirdChecked) selectedOptions.push('Option 3');

    alert(`You selected: ${selectedOptions.join(', ') || 'None'}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Select your preferences:</Text>
        <View style={styles.checkboxItem}>
          <Checkbox
            status={firstChecked ? 'checked' : 'unchecked'}
            onPress={() => setFirstChecked(!firstChecked)}
          />
          <Text style={styles.checkboxText}>Option 1</Text>
        </View>
        <View style={styles.checkboxItem}>
          <Checkbox
            status={secondChecked ? 'checked' : 'unchecked'}
            onPress={() => setSecondChecked(!secondChecked)}
          />
          <Text style={styles.checkboxText}>Option 2</Text>
        </View>
        <View style={styles.checkboxItem}>
          <Checkbox
            status={thirdChecked ? 'checked' : 'unchecked'}
            onPress={() => setThirdChecked(!thirdChecked)}
          />
          <Text style={styles.checkboxText}>Option 3</Text>
        </View>
      </View>

      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </SafeAreaView>
  );
};
const App = () => {
  return (
    <PaperProvider>
      <RatingButton initialRating={3} onRate={(rating) => console.log(rating)} />
    </PaperProvider>
  );
};
const App = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <SwitchSlider label="Main Switch" initial={false} />
    </View>
  );
};
const App = () => {
  const handleToggle = (isOn: boolean) => {
    console.log('Toggle button state:', isOn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Transfer List App</Text>
      <ToggleButton onToggle={handleToggle} />
    </View>
  );
};
const App = () => {
  // Function to handle FAB press
  const handleFabPress = () => {
    alert('FAB Pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the FAB Example!</Text>
      </View>
      
      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handleFabPress}
      />
    </SafeAreaView>
  );
};
export default App;
