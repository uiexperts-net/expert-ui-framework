import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('should initially render the loading screen', () => {
    render(<App />);
    
    // Assuming your app shows a loading indicator (like a spinner or logo) initially
    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();
  });

  it('should display the welcome message after loading', async () => {
    render(<App />);
    
    // Wait for the loading phase to finish (if there's a delay in showing the content)
    await waitFor(() => expect(screen.getByText('Welcome to the app!')).toBeInTheDocument());
  });

  it('should display the "Sync Contact" button after loading', async () => {
    render(<App />);
    
    // Wait for the app to finish loading
    await waitFor(() => expect(screen.getByText('Sync Contact')).toBeInTheDocument());
  });
});

// Add this line to make the file a module
export {};
