import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface ZCheckboxProps {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZCheckbox: React.FC<ZCheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};
