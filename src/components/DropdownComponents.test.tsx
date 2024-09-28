import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropdownComponent, { DropdownOption } from './DropdownComponent';

test('DropdownComponent renders and calls onSelect', () => {
  const mockOnSelect = jest.fn();

  // Mock dropdown options
  const options: DropdownOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  // Render the DropdownComponent with required props, including the placeholder
  render(
    <DropdownComponent
      options={options}
      onSelect={mockOnSelect}
      placeholder="Select an option"
    />
  );

  // Find the select element
  const selectElement = screen.getByRole('combobox');
  
  // Simulate selecting an option
  fireEvent.change(selectElement, { target: { value: '1' } });
  expect(mockOnSelect).toHaveBeenCalledWith('1');
});
