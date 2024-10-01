import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom matchers
import CheckboxComponent from './CheckboxComponent';

test('renders the checkbox with the correct label', () => {
  const handleChange = jest.fn();
  render(<CheckboxComponent label="Test Checkbox" checked={false} onChange={handleChange} />);
  
  const checkbox = screen.getByLabelText('Test Checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('calls onChange when checkbox is clicked', () => {
  const handleChange = jest.fn();
  render(<CheckboxComponent label="Test Checkbox" checked={false} onChange={handleChange} />);
  
  const checkbox = screen.getByLabelText('Test Checkbox');
  
  // Simulate a click event on the checkbox
  fireEvent.click(checkbox);
  
  // Expect handleChange to have been called with the opposite value
  expect(handleChange).toHaveBeenCalledWith(true);  // Updated expectation based on toggling
});

test('renders as checked when passed checked=true', () => {
  const handleChange = jest.fn();
  render(<CheckboxComponent label="Test Checkbox" checked={true} onChange={handleChange} />);
  
  const checkbox = screen.getByLabelText('Test Checkbox');
  
  // Check that the checkbox is checked
  expect(checkbox).toBeChecked();
});
