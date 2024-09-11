import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders LayoutComponent with header, content, and footer', () => {
  render(<App />);

  // Check if the LayoutComponent renders with correct header, content, and footer
  const headerElement = screen.getByText(/Header Section/i);
  const contentElement = screen.getByText(/Click the button!/i);  // updated to match the actual content
  const footerElement = screen.getByText(/Footer Section/i);

  // Verify the elements are present in the document
  expect(headerElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

test('updates content when button is clicked', () => {
  render(<App />);

  // Check if the button and initial content are present
  const buttonElement = screen.getByText(/Click Me/i);
  const contentElement = screen.getByText(/Click the button!/i);

  expect(buttonElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();

  // Simulate clicking the button
  fireEvent.click(buttonElement);

  // Check if the content updates after clicking the button
  const updatedContentElement = screen.getByText(/Button clicked!/i);
  expect(updatedContentElement).toBeInTheDocument();
});
