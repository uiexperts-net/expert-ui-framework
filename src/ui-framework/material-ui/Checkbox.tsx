// src/ui-framework/material-ui/Checkbox.tsx

import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

interface ZCheckboxProps extends MuiCheckboxProps {}

export const ZCheckbox: React.FC<ZCheckboxProps> = (props) => {
  return <MuiCheckbox {...props} />;
};
