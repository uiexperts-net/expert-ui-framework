import React from 'react';

// Export the CheckboxProps interface so it can be used elsewhere
export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// CheckboxComponent using CheckboxProps
const CheckboxComponent: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  // Handle checkbox toggle
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
