import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hmgrp component inside App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Manager/i);
  expect(linkElement).toBeInTheDocument();
});
