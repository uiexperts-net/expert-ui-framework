import React from 'react';

export interface ZToggleButtonProps {
    value: string; // Change to string if that is the intended type
    onChange: (event: React.MouseEvent<HTMLElement>, value: string) => void;
}

const ZToggleButton: React.FC<ZToggleButtonProps> = ({ value, onChange }) => {
    return (
        <button onClick={(e) => onChange(e, value === 'selected' ? 'deselected' : 'selected')}>
            {value}
        </button>
    );
};

export default ZToggleButton;
