import React from 'react';

interface ZTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ZText: React.FC<ZTextProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
