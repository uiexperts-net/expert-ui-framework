import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

export interface ZRadioGroupProps {
    options: string[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZRadioGroup: React.FC<ZRadioGroupProps> = ({ options, value, onChange }) => {
    return (
        <RadioGroup value={value} onChange={onChange}>
            {options.map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
        </RadioGroup>
    );
};

export default ZRadioGroup;
