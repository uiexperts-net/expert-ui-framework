import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

test('renders checkbox with label', () => {
  render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
  
  const checkbox = screen.getByLabelText(/test checkbox/i);
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});

test('checkbox toggles state on click', () => {
  const handleChange = jest.fn();
  render(<Checkbox label="Toggle Checkbox" checked={false} onChange={handleChange} />);
  
  const checkbox = screen.getByLabelText(/toggle checkbox/i);
  fireEvent.click(checkbox);
  
  expect(handleChange).toHaveBeenCalledWith(true);
});
