// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Adjust the import path if needed

test('renders Navigation component and checks link functionality', () => {
  render(<App />);

  // Check if the Navigation component is rendered
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
