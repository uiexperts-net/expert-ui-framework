// src/component/RadioButton.tsx
import React from 'react';
import classNames from 'classnames';

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, name, value, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className={classNames('form-check-input')}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
