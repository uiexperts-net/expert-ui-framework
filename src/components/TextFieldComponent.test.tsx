// src/components/TextFieldComponent.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextFieldComponent from './TextFieldComponent';

describe('TextFieldComponent', () => {
  it('renders the component with correct label and placeholder', () => {
    render(
      <TextFieldComponent
        label="Test Label"
        value=""
        onChange={() => {}}
        placeholder="Enter text"
      />
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<TextFieldComponent label="Test Label" value="" onChange={handleChange} />);
    const inputElement = screen.getByLabelText('Test Label');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('disables the input when disabled is true', () => {
    render(<TextFieldComponent label="Test Label" value="" onChange={() => {}} disabled />);
    const inputElement = screen.getByLabelText('Test Label');
    expect(inputElement).toBeDisabled();
  });
});
