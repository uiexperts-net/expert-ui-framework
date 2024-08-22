import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import View
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: 200,
  },
});
