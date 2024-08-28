import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  // Ensure this path is correct

test('renders the expected content in App component', () => {
  // Render the App component
  render(<App />);
  
  // Replace "learn react" with the actual text you expect to find
  // Example: if App renders "Dropdown Example", then update accordingly
  const headingElement = screen.getByText(/Dropdown Example/i);
  expect(headingElement).toBeInTheDocument();
  
  // Add additional assertions based on the actual content rendered
  const selectElement = screen.getByRole('combobox'); // If your App contains a select dropdown
  expect(selectElement).toBeInTheDocument();
  
  // You can also check for specific options if they are rendered
  const optionElement = screen.getByText(/Option 1/i); // Update based on your dropdown options
  expect(optionElement).toBeInTheDocument();
});
