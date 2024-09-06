import React from 'react';
import { render, screen } from '@testing-library/react';
import TableComponent from '../components/TableComponent';

test('renders the table with data', () => {
  render(<TableComponent />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();
});
