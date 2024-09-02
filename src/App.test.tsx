import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Floating Action Button', () => {
  render(<App />);

  const fabButton = screen.getByRole('button');
  expect(fabButton).toBeInTheDocument();
  expect(fabButton.querySelector('i')).toHaveClass('fas fa-plus');
});

test('clicking Floating Action Button triggers alert', () => {
  render(<App />);

  const fabButton = screen.getByRole('button');
  window.alert = jest.fn();  // Mock alert
  fabButton.click();
  expect(window.alert).toHaveBeenCalledWith('Floating Action Button Clicked!');  // Update with the actual message
});
