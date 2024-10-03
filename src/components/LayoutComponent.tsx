import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

const LayoutComponent: React.FC = () => {
  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title="My Layout" />
        <Card.Content>
          <Text>This is a layout component using React Native Paper.</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Pressed')}>Press me</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default LayoutComponent;
