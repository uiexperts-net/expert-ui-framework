// src/component/RadioButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton component with label', () => {
  render(<RadioButton id="radio1" label="Option 1" name="group1" value="option1" checked={false} onChange={() => {}} />);

  const labelElement = screen.getByLabelText(/Option 1/i);
  expect(labelElement).toBeInTheDocument();
});

test('checks RadioButton when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton id="radio1" label="Option 1" name="group1" value="option1" checked={false} onChange={handleChange} />);

  const radioElement = screen.getByLabelText(/Option 1/i);
  fireEvent.click(radioElement);
  expect(handleChange).toHaveBeenCalled();
});
