import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should update and display selected option from dropdown', () => {
  render(<App />);
  
  // Use getByRole to select the dropdown
  const dropdown = screen.getByRole('combobox'); // Combobox is the role for dropdowns/select elements
  
  fireEvent.change(dropdown, { target: { value: 'Option 2' } });
  
  // Check if the selected option is displayed
  expect(screen.getByText('Selected Option: Option 2')).toBeInTheDocument();
});
