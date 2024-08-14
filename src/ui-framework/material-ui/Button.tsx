// src/ui-framework/material-ui/Button.tsx

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ZButtonProps extends MuiButtonProps {}

export const ZButton: React.FC<ZButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
