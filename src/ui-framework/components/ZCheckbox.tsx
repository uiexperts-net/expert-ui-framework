import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const ZCheckbox: React.FC<{ label: string }> = ({ label }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={label}
        />
    );
};

export default ZCheckbox;
