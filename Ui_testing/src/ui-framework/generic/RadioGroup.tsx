import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface ZRadioGroupProps {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZRadioGroup: React.FC<ZRadioGroupProps> = ({ value, options, onChange }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="radio-input"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};