import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Autocomplete from './Autocomplete';

test('renders Autocomplete component', () => {
  render(<Autocomplete suggestions={['Apple', 'Banana', 'Cherry']} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('displays suggestions when input is provided', () => {
  render(<Autocomplete suggestions={['Apple', 'Banana', 'Cherry']} />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'Ap' } });
  
  const suggestionElement = screen.getByText('Apple');
  expect(suggestionElement).toBeInTheDocument();
});

test('allows the user to select a suggestion', () => {
  render(<Autocomplete suggestions={['Apple', 'Banana', 'Cherry']} />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'Ban' } });

  const suggestionElement = screen.getByText('Banana');
  fireEvent.click(suggestionElement);

  expect(inputElement).toHaveValue('Banana');
});
