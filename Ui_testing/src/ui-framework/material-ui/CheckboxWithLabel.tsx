// src/ui-framework/material-ui/CheckboxWithLabel.tsx

import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@mui/material';
import { ZCheckbox } from './Checkbox';

interface ZCheckboxWithLabelProps extends Omit<FormControlLabelProps, 'control'> {
  checkboxProps?: React.ComponentProps<typeof ZCheckbox>;
}

export const ZCheckboxWithLabel: React.FC<ZCheckboxWithLabelProps> = ({ checkboxProps, ...formControlLabelProps }) => {
  return <FormControlLabel control={<ZCheckbox {...checkboxProps} />} {...formControlLabelProps as Omit<FormControlLabelProps, 'control'>} />;
};
