
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the `toBeInTheDocument` matcher
import App from './App';

describe('App component', () => {
  test('renders heading and link', () => {
    render(<App />);
    const headingElement = screen.getByText(/React Components Example/i);
    expect(headingElement).toBeInTheDocument();
    
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Switch component functionality', () => {
    render(<App />);
    
    // Get the Switch element by its class
    const switchInput = screen.getByRole('checkbox');
    
    // Check initial state
    expect(switchInput).not.toBeChecked();
    
    // Click the switch to toggle it
    fireEvent.click(switchInput);
    
    // Check that the switch is now checked
    expect(switchInput).toBeChecked();
    
    // Click again to toggle it off
    fireEvent.click(switchInput);
    
    // Check that the switch is now unchecked
    expect(switchInput).not.toBeChecked();
  });

  test('ToggleButton component functionality', () => {
    render(<App />);
    
    // Get the ToggleButton element by its text
    const toggleButton = screen.getByRole('button', { name: /OFF/i });
    
    // Check initial state
    expect(toggleButton).toHaveTextContent('OFF');
    
    // Click the toggle button to turn it on
    fireEvent.click(toggleButton);
    
    // Check that the button text is now ON
    expect(toggleButton).toHaveTextContent('ON');
    
    // Click again to turn it off
    fireEvent.click(toggleButton);
    
    // Check that the button text is now OFF
    expect(toggleButton).toHaveTextContent('OFF');
  });
});
=======
import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';



import App from './App';



import '@testing-library/jest-dom'; // Import the matchers
import { act } from 'react';  // Use react's act
import CheckboxComponent from './component/CheckboxComponent';

test('CheckboxComponent renders with label and toggles checkbox', () => {
  const handleChange = jest.fn();

  // Use act for wrapping updates
  act(() => {
    render(<CheckboxComponent label="Test Checkbox" checked={false} onChange={handleChange} />);
  });

  const checkbox = screen.getByRole('checkbox');
  const label = screen.getByText('Test Checkbox');

  expect(checkbox).toBeInTheDocument();  // Correct matcher
  expect(label).toBeInTheDocument();2

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


