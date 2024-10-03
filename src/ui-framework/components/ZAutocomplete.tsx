// src/ui-framework/components/ZAutocomplete.tsx

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface ZAutocompleteProps {
  options: string[];
  label: string;
  onChange: (event: React.ChangeEvent<{}>, value: string | null) => void; // Adding onChange handler
}

export const ZAutocomplete: React.FC<ZAutocompleteProps> = ({ options, label, onChange }) => {
  return (
    <Autocomplete
      options={options}
      onChange={onChange} // Ensure onChange is passed to Autocomplete
      renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    />
  );
};
