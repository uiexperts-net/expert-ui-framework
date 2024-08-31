import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TextFieldComponent demo heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/TextFieldComponent Demo/i);
  expect(headingElement).toBeInTheDocument();
});
