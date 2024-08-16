// src/ui-framework/material-ui/RadioGroup.tsx

import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

// Define props for the RadioGroup component
interface ZRadioGroupProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
}

// Define the RadioGroup component
export const ZRadioGroup: React.FC<ZRadioGroupProps> = ({ value, onChange, options }) => {
  return (
    <FormControl component="fieldset">
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
    </FormControl>
  );
};
