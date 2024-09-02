// src/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders RadioButton components and checks functionality', () => {
  render(<App />);

  const radio1 = screen.getByLabelText(/Option 1/i);
  const radio2 = screen.getByLabelText(/Option 2/i);

  expect(radio1).toBeInTheDocument();
  expect(radio2).toBeInTheDocument();

  expect(radio1).not.toBeChecked();
  expect(radio2).not.toBeChecked();

  fireEvent.click(radio1);
  expect(radio1).toBeChecked();
  expect(radio2).not.toBeChecked();

  fireEvent.click(radio2);
  expect(radio2).toBeChecked();
  expect(radio1).not.toBeChecked();
});
