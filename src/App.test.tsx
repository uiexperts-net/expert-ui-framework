import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  // Ensure this path is correct

test('renders the expected content in App component', () => {
  // Render the App component
  render(<App />);
  
  // Replace "learn react" with the actual text you expect to find
  // Example: if App renders "Dropdown Example", then update accordingly
  const headingElement = screen.getByText(/Dropdown Example/i);
  expect(headingElement).toBeInTheDocument();
  
  // Add additional assertions based on the actual content rendered
  const selectElement = screen.getByRole('combobox'); // If your App contains a select dropdown
  expect(selectElement).toBeInTheDocument();
  
  // You can also check for specific options if they are rendered
  const optionElement = screen.getByText(/Option 1/i); // Update based on your dropdown options
  expect(optionElement).toBeInTheDocument();
import '@testing-library/jest-dom';
import App from './App';

test('renders autocomplete component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Autocomplete Component/i);
  expect(headerElement).toBeInTheDocument();
  
  const inputElement = screen.getByLabelText(/Select an option/i);
  expect(inputElement).toBeInTheDocument();

import App from './App';

// Test for Button Group Example heading
test('renders Button Group Example heading', () => {
  render(<App />);
  
  // Check if the heading is rendered
  const headingElement = screen.getByText(/Button Group Example/i);
  expect(headingElement).toBeInTheDocument();
});

// Test for rendering all buttons in the Button Group
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

// Test for React learn link (if applicable)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
