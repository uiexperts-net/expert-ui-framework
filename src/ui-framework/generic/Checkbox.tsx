import React from 'react';

export interface ZCheckboxProps {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZCheckbox: React.FC<ZCheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
