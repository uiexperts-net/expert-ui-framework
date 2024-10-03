// src/TextField.tsx
import React from 'react';

export interface TextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

export default TextField;
