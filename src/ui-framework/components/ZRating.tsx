import React from 'react';
import Rating from '@mui/material/Rating';

export interface ZRatingProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number | null) => void;
}

const ZRating: React.FC<ZRatingProps> = ({ value, onChange }) => {
    return <Rating value={value} onChange={onChange} />;
};

export default ZRating;
