import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextFieldComponent from './TextFieldComponent';

test('TextFieldComponent renders and calls onChange', () => {
  const mockOnChange = jest.fn();

  // Render the TextFieldComponent with required props
  render(
    <TextFieldComponent
      value=""
      onChange={mockOnChange}
      placeholder="Enter text"
    />
  );

  // Find the input element
  const inputElement = screen.getByPlaceholderText('Enter text');

  // Simulate typing in the text field
  fireEvent.change(inputElement, { target: { value: 'Test input' } });
  
  // Check that onChange has been called with the correct value
  expect(mockOnChange).toHaveBeenCalledWith('Test input');
});
