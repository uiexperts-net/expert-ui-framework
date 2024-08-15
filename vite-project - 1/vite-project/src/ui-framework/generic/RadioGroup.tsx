import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface ZRadioGroupProps {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZRadioGroup: React.FC<ZRadioGroupProps> = ({ value, options, onChange }) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};
