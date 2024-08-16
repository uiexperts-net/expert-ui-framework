import React from 'react';

interface ZCheckboxProps {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZCheckbox: React.FC<ZCheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox-input"
        />
        {label}
      </label>
    </div>
  );
};
