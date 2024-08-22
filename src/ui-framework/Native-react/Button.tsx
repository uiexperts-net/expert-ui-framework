import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const MyButtonComponent: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button 
        mode="contained" 
        onPress={() => console.log('Button pressed!')}
        icon="camera" 
        color="#6200ee"
      >
        Press me
      </Button>
    </View>
  );
};

export default MyButtonComponent;
