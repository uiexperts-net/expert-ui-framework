// src/ui-framework/generic/Text.tsx

import React from 'react';
import TextField from '@mui/material/TextField';

interface ZTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  fullWidth?: boolean;
}

export const ZText: React.FC<ZTextProps> = ({
  value,
  onChange,
  label = '',
  placeholder = '',
  type = 'text',
  variant = 'outlined',
  fullWidth = true,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
    />
  );
};
