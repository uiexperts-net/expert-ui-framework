// Surface.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Surface from './Surface';

test('renders surface with default styles', () => {
  render(<Surface>Test Content</Surface>);
  
  const surface = screen.getByText(/test content/i);
  expect(surface).toBeInTheDocument();
  expect(surface).toHaveStyle('background-color: white');
  expect(surface).toHaveStyle('width: 100%');
  expect(surface).toHaveStyle('height: 100%');
});

test('renders surface with custom styles', () => {
  render(
    <Surface color="blue" width="200px" height="150px">
      Custom Content
    </Surface>
  );
  
  const surface = screen.getByText(/custom content/i);
  expect(surface).toBeInTheDocument();
  expect(surface).toHaveStyle('background-color: blue');
  expect(surface).toHaveStyle('width: 200px');
  expect(surface).toHaveStyle('height: 150px');
});
