import React from 'react';

interface RadioGroupProps {
  options: string[];
  name: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, onChange }) => {
  return (
    <div>
      {options.map(option => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={name}
            value={option}
            onChange={() => onChange(option)}
            aria-label={option}  // Ensures proper labeling for testing
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
