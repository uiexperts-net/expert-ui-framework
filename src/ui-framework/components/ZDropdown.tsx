import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export interface ZDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
}

const ZDropdown: React.FC<ZDropdownProps> = ({ label, options, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <Select
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default ZDropdown;
