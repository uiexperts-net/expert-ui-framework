// src/components/TextFieldComponent.tsx
import React from 'react';

interface TextFieldComponentProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  disabled = false,
}) => {
  const inputId = `textfield-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default TextFieldComponent;
