// app.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should update and display selected radio option', () => {
    const radioOption1 = screen.getByLabelText('Option 1');
    fireEvent.click(radioOption1);

    expect(screen.getByText('Selected Radio Option: Option 1')).toBeInTheDocument();
  });

  test('should update and display selected rating', () => {
    const stars = screen.getAllByTestId('star');
    expect(stars).toHaveLength(5);

    const thirdStar = stars[2];
    fireEvent.click(thirdStar);

    expect(screen.getByText('Selected Rating: 3')).toBeInTheDocument();
  });
});
