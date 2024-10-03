import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('should call onSelect with the selected option', () => {
  const handleSelect = jest.fn(); // Mock the handleSelect function
  const options = ['Option 1', 'Option 2'];

  render(<Dropdown title="Select an Option" options={options} onSelect={handleSelect} />);
  
  // Find the dropdown element
  const dropdown = screen.getByRole('combobox'); // Use role for dropdown
  
  // Simulate selecting an option
  fireEvent.change(dropdown, { target: { value: 'Option 1' } });

  // Check if handleSelect was called with the correct value
  expect(handleSelect).toHaveBeenCalledWith('Option 1');
});
