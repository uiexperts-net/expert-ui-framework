// src/App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  expect(screen.getByText(/Button Component Example/i)).toBeInTheDocument();
});

test('renders the Primary Button and handles click event', () => {
  render(<App />);
  
  const buttonElement = screen.getByText(/Primary Button/i);
  expect(buttonElement).toBeInTheDocument();
  
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith('Button Clicked!');
});

// Mocking window.alert to avoid the actual alert pop-up during tests
beforeAll(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});
