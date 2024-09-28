import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactList from './ContactList'; // Correct import based on your file name
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import { act } from 'react'; // Use act from 'react' instead of react-dom/test-utils


// Mock for fetch function to simulate fetching contacts
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { name: 'Sunitha', phone: '123-456-7890' },
        { name: 'Shyam', phone: '987-654-3210' },
      ]),
  })
) as jest.Mock;

describe('Contactlist Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Contact Manager heading', () => {
    act(() => {
      render(<ContactList />);
    });
    const headingElement = screen.getByText(/Contact Manager/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders contact list', async () => {
    act(() => {
      render(<ContactList />);
    });

    const contact1 = await screen.findByText(/Sunitha/i);
    const contact2 = await screen.findByText(/Shyam/i);

    expect(contact1).toBeInTheDocument();
    expect(contact2).toBeInTheDocument();
  });

  test('search filters the contact list', async () => {
    act(() => {
      render(<ContactList />);
    });

    await screen.findByText(/Sunitha/i);

    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'Shyam' } });

    const filteredContact = screen.getByText(/Shyam/i);
    expect(filteredContact).toBeInTheDocument();

    expect(screen.queryByText(/Sunitha/i)).toBeNull();
  });

  test('displays no results message when no contacts match search query', async () => {
    act(() => {
      render(<ContactList />);
    });

    await screen.findByText(/Sunitha/i);

    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'Unknown' } });

    const noResultsMessage = screen.getByText(/No contacts found/i);
    expect(noResultsMessage).toBeInTheDocument();
  });
});
