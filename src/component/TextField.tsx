// src/component/TextField.tsx
import React from 'react';

export interface TextFieldProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ value, placeholder, onChange }) => {
  return <input type="text" value={value} placeholder={placeholder} onChange={onChange} />;
};

export default TextField;
