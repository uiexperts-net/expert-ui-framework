import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ZAutocomplete } from './ZAutocomplete';

test('renders autocomplete component with options and handles change', () => {
  const mockOnChange = jest.fn();
  render(
    <ZAutocomplete
      options={['Option 1', 'Option 2', 'Option 3']}
      label="Select an option"
      onChange={mockOnChange} // Provide mock function
    />
  );

  const inputElement = screen.getByLabelText(/Select an option/i);
  expect(inputElement).toBeInTheDocument();
  
  // Open the autocomplete dropdown
  fireEvent.mouseDown(inputElement);
  
  // Check if options are present in the dropdown
  const option1 = screen.getByText('Option 1');
  const option2 = screen.getByText('Option 2');
  const option3 = screen.getByText('Option 3');
  
  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();

  // Simulate a change event
  fireEvent.change(inputElement, { target: { value: 'Option 1' } });
  expect(mockOnChange).toHaveBeenCalled();
});
