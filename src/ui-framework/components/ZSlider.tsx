import React from 'react';
import Slider from '@mui/material/Slider';

export interface ZSliderProps {
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
}

const ZSlider: React.FC<ZSliderProps> = ({ value, onChange }) => {
    return <Slider value={value} onChange={onChange} />;
};

export default ZSlider;
