// src/App.test.tsx
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
