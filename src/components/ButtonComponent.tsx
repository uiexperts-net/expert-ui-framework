import React from 'react';

// Define the interface for ButtonProps
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

// The ButtonComponent using ButtonProps
const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

// Export ButtonComponent and ButtonProps as named exports
export default ButtonComponent;
