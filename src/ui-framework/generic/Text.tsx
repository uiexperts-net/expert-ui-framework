import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
interface Option {
  label: string;
  value: string;
}
interface CustomTextProps {
  content: string;
  style?: object;
}

interface ZSelectProps {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const CustomText: React.FC<CustomTextProps> = ({ content, style }) => {
  return <Text style={[styles.text, style]}>{content}</Text>;
};
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
export default CustomText;
