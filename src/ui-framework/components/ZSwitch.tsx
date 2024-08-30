import React from 'react';
import Switch from '@mui/material/Switch';

export interface ZSwitchProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZSwitch: React.FC<ZSwitchProps> = ({ checked, onChange }) => {
    return <Switch checked={checked} onChange={onChange} />;
};

export default ZSwitch;
