import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Button Group Example heading', () => {
  render(<App />);
  
  // Check if the heading is rendered
  const headingElement = screen.getByText(/Button Group Example/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders all buttons in the Button Group', () => {
  render(<App />);
  
  // Check if all buttons are rendered
  const button1 = screen.getByText('Button 1');
  const button2 = screen.getByText('Button 2');
  const button3 = screen.getByText('Button 3');

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
  expect(button3).toBeInTheDocument();
});
