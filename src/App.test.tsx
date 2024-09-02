import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  // Ensure the path to App is correct

test('renders the expected content in App component with ButtonComponent', () => {
  // Render the App component
  render(<App />);
  
  // Check if the button with the label "Click Me" is rendered
  const buttonElement = screen.getByRole('button', { name: /Click Me/i });
  expect(buttonElement).toBeInTheDocument();
  
  // Additional assertions can be added as needed
  expect(buttonElement).not.toBeDisabled();  // If the button should not be disabled by default
});
