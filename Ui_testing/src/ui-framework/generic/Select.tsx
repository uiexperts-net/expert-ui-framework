import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface ZSelectProps {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ZSelect: React.FC<ZSelectProps> = ({ value, options, onChange }) => {
  return (
    <div className="select-container">
      <label className="select-label">Dropdown</label>
      <select value={value} onChange={onChange} className="select-element">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};