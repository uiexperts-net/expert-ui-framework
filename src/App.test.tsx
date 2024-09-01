import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  // Make sure this path to App is correct

test('renders the expected content in App component with TextFieldComponent', () => {
  // Render the App component
  render(<App />);
  
  // Check if the TextFieldComponent is rendered by its placeholder text
  const inputElement = screen.getByPlaceholderText(/Enter text/i);  // Replace with your actual placeholder
  expect(inputElement).toBeInTheDocument();
  
  // You can add further assertions based on other content rendered in the App component
  const headingElement = screen.getByText(/TextField Example/i);  // Adjust the text accordingly
  expect(headingElement).toBeInTheDocument();
  
  // Optionally check the initial value or other attributes
  expect(inputElement).toHaveValue('');  // Assuming the initial value is an empty string
  
  // Additional checks for content or buttons can go here
});
