import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface ZSelectProps {
  value: string;
  options: Option[];
  onChange: (event: SelectChangeEvent<string>) => void; // Adjusted type
}

export const ZSelect: React.FC<ZSelectProps> = ({ value, options, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Dropdown</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label="Dropdown"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
