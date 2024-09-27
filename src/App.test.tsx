import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust if the path is different

test('renders contact manager title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Contact Manager/i);
  expect(titleElement).toBeInTheDocument();
});
