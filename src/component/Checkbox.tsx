import React from 'react';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        id="customCheck1"
      />
      <label className="form-check-label" htmlFor="customCheck1">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
