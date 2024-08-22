import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const MyButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => console.log('Button Pressed')}
        style={styles.button}
      >
        Press Me
      </Button>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: 200,
  },
});
