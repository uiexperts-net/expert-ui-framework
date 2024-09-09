import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Surface component with default content and changes content on button click', () => {
  render(<App />);
  
  // Check if the Surface component is rendered with the correct default content
  const surfaceElement = screen.getByText(/Default Content/i);
  expect(surfaceElement).toBeInTheDocument();
  
  // Check if the Surface component has the correct initial styles
  expect(surfaceElement).toHaveStyle('background-color: lightblue');
  expect(surfaceElement).toHaveStyle('width: 300px');
  expect(surfaceElement).toHaveStyle('height: 200px');

  // Click the button to toggle the content
  const toggleButton = screen.getByRole('button', { name: /Toggle Content/i });
  fireEvent.click(toggleButton);

  // After clicking, the content should be updated
  expect(screen.getByText(/Updated Content/i)).toBeInTheDocument();
  expect(screen.queryByText(/Default Content/i)).not.toBeInTheDocument();
});
