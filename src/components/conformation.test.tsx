import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfirmationPage from './conformation';

describe('ConfirmationPage Component', () => {
  it('should render confirmation message', () => {
    render(<ConfirmationPage />);
    expect(screen.getByText('Your action has been confirmed!')).toBeInTheDocument();
  });

  it('should render Go Back button', () => {
    render(<ConfirmationPage />);
    expect(screen.getByText('Go Back')).toBeInTheDocument();
  });

  it('should render Home button', () => {
    render(<ConfirmationPage />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

// Add this line to make the file a module
export {};
