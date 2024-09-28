import React from 'react';
import Form from 'react-bootstrap/Form';

interface DropdownProps {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, onSelect }) => {
  return (
    <Form.Group>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        as="select"
        aria-label={title}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select an option...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Dropdown;
