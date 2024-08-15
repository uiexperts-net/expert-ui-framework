import React from 'react';
import { render, screen } from '@testing-library/react';
import { ZButton } from './Button';  // Adjust the import to match your named export
import '@testing-library/jest-dom';


describe('ZButton', () => {
  it('renders without crashing', () => {
    render(<ZButton>Click Me</ZButton>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies additional props correctly', () => {
    render(<ZButton disabled={true}>Click Me</ZButton>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeDisabled();
  });
});
