// src/ui-framework/components/ZButton.tsx

import React from 'react';
import Button from '@mui/material/Button';

interface ZButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onClick?: () => void;
  children: React.ReactNode;
}

export const ZButton: React.FC<ZButtonProps> = ({ variant = 'contained', color = 'primary', onClick, children }) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};
