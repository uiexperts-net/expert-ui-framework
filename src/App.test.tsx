import React from 'react';
import { render, screen } from '@testing-library/react';
import TableComponent from './component/TableComponent';


test('renders table component with title and headers', () => {
  // Render the TableComponent with some test data
  render(
    <TableComponent
      title="Employee Data"
      headers={['ID', 'Name', 'Age']}
      data={[
        [1, 'John Doe', 28],
        [2, 'Jane Smith', 32],
        [3, 'Mark Taylor', 25],
      ]}
    />
  );

  // Check if the title is rendered
  const titleElement = screen.getByText(/employee data/i);
  expect(titleElement).toBeInTheDocument();

  // Check if the headers are rendered
  expect(screen.getByText(/id/i)).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/age/i)).toBeInTheDocument();

  // Check if the table data is rendered
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  expect(screen.getByText('28')).toBeInTheDocument();

  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText(/jane smith/i)).toBeInTheDocument();
  expect(screen.getByText('32')).toBeInTheDocument();

  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText(/mark taylor/i)).toBeInTheDocument();
  expect(screen.getByText('25')).toBeInTheDocument();
});
