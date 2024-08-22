<<import React from 'react';
import { ZButton } from './ui-framework/components/ZButton'; // Correct path to the ZButton component

const App: React.FC = () => {
  return (
    <div>
      <ZButton variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
        Click Me
      </ZButton>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import './styles.css';
import { ZText } from './ui-framework/generic/Text';
import { ZButton } from './ui-framework/material-ui/Button';
import { ZRadioGroup } from './ui-framework/generic/RadioGroup';
import { ZCheckbox } from './ui-framework/generic/Checkbox';
import { ZSelect } from './ui-framework/generic/Select';
import { SelectChangeEvent } from '@mui/material';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import CustomText from './Text';

function App() {
  const [curName, setCurName] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<string>('');

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <CustomText content="Welcome to React Native Paper!" />
        <Button mode="contained" onPress={handlePress} style={styles.button}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
};

  // Explicitly type the event parameter
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  // Explicitly type the event parameter
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="form-container">
      <div className="form-element">
        <ZText value={curName} onChange={(event) => setCurName(event.target.value)} />
      </div>
      <div className="form-element radio-group">
        <ZRadioGroup
          value={radioValue}
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
          onChange={(event) => setRadioValue(event.target.value)}
        />
      </div>
      <div className="form-element checkbox">
        <ZCheckbox
          checked={checked}
          label="Check me"
          onChange={handleCheckboxChange} // Use the typed handler
        />
      </div>
      <div className="form-element dropdown">
        <ZSelect
          value={selectedOption}
          options={dropdownOptions}
          onChange={handleSelectChange} // Use the typed handler
        />
      </div>
      <div className="form-element">
        <ZButton />
      </div>
      <div className="form-element">
        CurName: {curName}
      </div>
    </div>
  );
}

export default App;