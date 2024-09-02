// src/components/FloatingActionButton.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FloatingActionButtonProps {
  onPress: () => void;
  icon: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress, icon }) => {
  return (
    <View style={styles.container}>
      <Button
        icon={({ size, color }) => (
          <MaterialCommunityIcons name={icon} size={size} color={color} />
        )}
        style={styles.button}
        onPress={onPress}
        mode="contained"
      >
        {/* You can optionally add a label here */}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 1000, // Ensures the button is above other UI elements
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Shadow for Android
  },
});

export default FloatingActionButton;
