
// src/ui-framework/material-ui/Button.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ZButtonProps extends MuiButtonProps {}
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
  style?: object;
  disabled?: boolean;
}

export const ZButton: React.FC<ZButtonProps> = (props) => {
  return <MuiButton {...props} />;
  const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  mode = 'contained',
  style,
  disabled = false,
}) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

};
