// src/components/SwitchSlider.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';

const SwitchSlider = ({ label, initial }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(initial);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{label}</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default SwitchSlider;
