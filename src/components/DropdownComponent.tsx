import React from 'react';

// Define the interface for dropdown options
export interface DropdownOption {
  value: string;
  label: string;
}

// Define the props interface using DropdownOption
export interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder: string;
}

// The DropdownComponent using DropdownOption
const DropdownComponent: React.FC<DropdownProps> = ({ options, onSelect, placeholder }) => {
  return (
    <div>
      <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Export DropdownComponent and DropdownOption as named exports
export default DropdownComponent;