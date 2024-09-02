import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface ButtonGroupProps {
  buttons: Array<{
    label: string;
    onPress: () => void;
    mode?: 'contained' | 'outlined' | 'text';
  }>;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          mode={button.mode || 'contained'}
          onPress={button.onPress}
          style={styles.button}
        >
          {button.label}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  button: {
    margin: 4,
  },
});

export default ButtonGroup;
