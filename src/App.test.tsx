
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should update and display selected option from dropdown', () => {
  render(<App />);
  
  // Use getByRole to select the dropdown
  const dropdown = screen.getByRole('combobox'); // Combobox is the role for dropdowns/select elements
  
  fireEvent.change(dropdown, { target: { value: 'Option 2' } });
  
  // Check if the selected option is displayed
  expect(screen.getByText('Selected Option: Option 2')).toBeInTheDocument();

import React from 'react';


// app.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';



import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Floating Action Button', () => {
  render(<App />);

  const fabButton = screen.getByRole('button');
  expect(fabButton).toBeInTheDocument();
  expect(fabButton.querySelector('i')).toHaveClass('fas fa-plus');
});

test('clicking Floating Action Button triggers alert', () => {
  render(<App />);

  const fabButton = screen.getByRole('button');
  window.alert = jest.fn();  // Mock alert
  fabButton.click();
  expect(window.alert).toHaveBeenCalledWith('Floating Action Button Clicked!');  // Update with the actual message
});


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


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();




