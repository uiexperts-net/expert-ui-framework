// src/components/ZButton.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ZButton } from './ZButton';

test('renders the button with correct text', () => {
  render(<ZButton>Test Button</ZButton>);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('calls the onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<ZButton onClick={handleClick}>Click Me</ZButton>);
  fireEvent.click(screen.getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
