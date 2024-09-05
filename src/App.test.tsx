import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders DataDisplay component and checks functionality', () => {
  render(<App />);

  // Check if the DataDisplay component is rendered with the correct initial title
  const titleElement = screen.getByText(/Current Data/i);
  expect(titleElement).toBeInTheDocument();

  // Check if the initial data is rendered
  const initialDataElement = screen.getByText(/Initial data/i);
  expect(initialDataElement).toBeInTheDocument();

  // Simulate a button click to update the data
  const updateButton = screen.getByRole('button', { name: /Update Data/i });
  fireEvent.click(updateButton);

  // Check if the DataDisplay component updates with the new data
  const updatedDataItems = ['Item 1', 'Item 2', 'Item 3'];
  updatedDataItems.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
