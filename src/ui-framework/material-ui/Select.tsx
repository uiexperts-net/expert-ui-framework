// src/ui-framework/material-ui/Select.tsx

import React from 'react';
import { Select as MuiSelect, SelectProps as MuiSelectProps, MenuItem } from '@mui/material';

// Define the props interface for ZSelect including children
interface ZSelectProps extends Omit<MuiSelectProps<any>, 'children'> {
  children?: React.ReactNode; // Explicitly define children
}

// Define the Generic Select component
export const ZSelect: React.FC<ZSelectProps> = (props) => {
  return (
    <MuiSelect {...props} />
  );
};

// Example usage of ZSelect with options
export const ZSelectWithOptions: React.FC = () => {
  return (
    <ZSelect defaultValue="" displayEmpty>
      <MenuItem value="" disabled>Select an option</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
    </ZSelect>
  );
};
