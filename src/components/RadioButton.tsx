import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

interface MyRadioButtonProps {
  value: string;
  label: string;
  status: 'checked' | 'unchecked';
  onPress: () => void;
}

const MyRadioButton: React.FC<MyRadioButtonProps> = ({ value, label, status, onPress }) => {
  return (
    <View style={styles.container}>
      <RadioButton
        value={value}
        status={status}
        onPress={onPress}
      />
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default MyRadioButton;
