// src/component/Switch.tsx
import React from 'react';

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  return (
    <button
      data-testid="switch-button" // Add data-testid
      aria-checked={isOn}
      onClick={onToggle}
      className={`switch ${isOn ? 'on' : 'off'}`}
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
};

export default Switch;

