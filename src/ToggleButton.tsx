// ToggleButton.tsx
import React, { useState } from 'react';

export interface ToggleButtonProps {
  toggled: boolean;
  onToggle: (toggled: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggled, onToggle }) => {
  const handleClick = () => {
    onToggle(!toggled);
  };

  return (
    <button onClick={handleClick}>
      {toggled ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;
