import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';

test('ButtonComponent renders and calls onClick', () => {
  const mockOnClick = jest.fn();

  // Render the ButtonComponent with required props
  render(
    <ButtonComponent
      label="Click Me"
      onClick={mockOnClick}
    />
  );

  // Find the button element by its label
  const buttonElement = screen.getByRole('button', { name: /Click Me/i });

  // Simulate clicking the button
  fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalled();
});
