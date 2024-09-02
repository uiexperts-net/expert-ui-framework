import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Checkbox component and checks functionality', () => {
  render(<App />);
  
  // Check if the Checkbox component is rendered with the correct label
  const checkboxElement = screen.getByLabelText(/Accept terms and conditions/i);
  expect(checkboxElement).toBeInTheDocument();

  // Initially, the checkbox should not be checked
  expect(checkboxElement).not.toBeChecked();

  // Simulate a change event to check the checkbox
  fireEvent.click(checkboxElement);

  // After clicking, the checkbox should be checked
  expect(checkboxElement).toBeChecked();
});

