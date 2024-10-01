import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Use this for additional matchers
import ContactDetail from './Contactdetail'; // Adjust the import path if necessary

describe('ContactDetail Component', () => {
  it('renders the contact name and phone number', () => {
    render(<ContactDetail name="Priyadharshini T" phoneNumber="9344334333" />);
    
    // Check if the contact name is rendered
    const nameElement = screen.getByText(/priyadharshini t/i);
    expect(nameElement).toBeInTheDocument();

    // Check if the phone number is rendered
    const phoneElement = screen.getByText(/9344334333/i);
    expect(phoneElement).toBeInTheDocument();
  });
});
