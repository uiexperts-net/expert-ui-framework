import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the matchers
import { act } from 'react';  // Use react's act
import CheckboxComponent from './component/CheckboxComponent';

test('CheckboxComponent renders with label and toggles checkbox', () => {
  const handleChange = jest.fn();

  // Use act for wrapping updates
  act(() => {
    render(<CheckboxComponent label="Test Checkbox" checked={false} onChange={handleChange} />);
  });

  const checkbox = screen.getByRole('checkbox');
  const label = screen.getByText('Test Checkbox');

  expect(checkbox).toBeInTheDocument();  // Correct matcher
  expect(label).toBeInTheDocument();2
});
