// src/components/ToggleButton.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface ToggleButtonProps {
  onToggle: (isOn: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handlePress = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };

  return (
    <View style={styles.container}>
      <Button
        mode={isOn ? 'contained' : 'outlined'}
        onPress={handlePress}
        style={styles.button}
      >
        {isOn ? 'ON' : 'OFF'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    width: 100,
    justifyContent: 'center',
  },
});

export default ToggleButton;
