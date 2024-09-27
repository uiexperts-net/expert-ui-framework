import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataDisplay from './DataDisplay';

test('renders DataDisplay with title and single string data', () => {
  render(<DataDisplay title="Test Title" data="Single Data Item" />);
  
  // Check if the title is rendered
  const titleElement = screen.getByText(/test title/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if the single data item is rendered
  const dataElement = screen.getByText(/single data item/i);
  expect(dataElement).toBeInTheDocument();
});

test('renders DataDisplay with title and an array of data items', () => {
  render(<DataDisplay title="Array Data Title" data={['Item 1', 'Item 2', 'Item 3']} />);
  
  // Check if the title is rendered
  const titleElement = screen.getByText(/array data title/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if all array items are rendered
  const item1 = screen.getByText(/item 1/i);
  const item2 = screen.getByText(/item 2/i);
  const item3 = screen.getByText(/item 3/i);
  
  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
  expect(item3).toBeInTheDocument();
});
