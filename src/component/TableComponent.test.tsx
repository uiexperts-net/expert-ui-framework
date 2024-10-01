import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableComponent from './TableComponent';

test('renders TableComponent with title and headers', () => {
  render(<TableComponent title="Test Table" headers={['ID', 'Name', 'Age']} data={[]} />);
  
  // Check if the title is rendered
  const titleElement = screen.getByText(/test table/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if all headers are rendered
  const header1 = screen.getByText(/id/i);
  const header2 = screen.getByText(/name/i);
  const header3 = screen.getByText(/age/i);
  
  expect(header1).toBeInTheDocument();
  expect(header2).toBeInTheDocument();
  expect(header3).toBeInTheDocument();
});

test('renders TableComponent with data', () => {
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

  // Check if the table headers are rendered
  expect(screen.getByText(/id/i)).toBeInTheDocument();
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/age/i)).toBeInTheDocument();

  // Check if the table data is rendered
  const row1Cell1 = screen.getByText('1');
  const row1Cell2 = screen.getByText(/john doe/i);
  const row1Cell3 = screen.getByText('28');

  const row2Cell1 = screen.getByText('2');
  const row2Cell2 = screen.getByText(/jane smith/i);
  const row2Cell3 = screen.getByText('32');

  const row3Cell1 = screen.getByText('3');
  const row3Cell2 = screen.getByText(/mark taylor/i);
  const row3Cell3 = screen.getByText('25');

  expect(row1Cell1).toBeInTheDocument();
  expect(row1Cell2).toBeInTheDocument();
  expect(row1Cell3).toBeInTheDocument();

  expect(row2Cell1).toBeInTheDocument();
  expect(row2Cell2).toBeInTheDocument();
  expect(row2Cell3).toBeInTheDocument();

  expect(row3Cell1).toBeInTheDocument();
  expect(row3Cell2).toBeInTheDocument();
  expect(row3Cell3).toBeInTheDocument();
});
