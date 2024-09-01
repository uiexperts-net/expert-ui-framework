import React, { useState } from 'react';

// Define the props interface for TextFieldComponent
export interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

// The TextFieldComponent
const TextFieldComponent: React.FC<TextFieldProps> = ({ value, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// Export TextFieldComponent as a named export
export default TextFieldComponent;
