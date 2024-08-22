import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders autocomplete component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Autocomplete Component/i);
  expect(headerElement).toBeInTheDocument();
  
  const inputElement = screen.getByLabelText(/Select an option/i);
  expect(inputElement).toBeInTheDocument();
});
