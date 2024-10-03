import React from 'react';
import TextField from '@mui/material/TextField';

export interface ZTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZTextField: React.FC<ZTextFieldProps> = ({ label, value, onChange }) => {
    return <TextField label={label} value={value} onChange={onChange} />;
};

export default ZTextField;
