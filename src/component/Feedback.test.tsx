import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feedback from './Feedback';

test('renders Feedback component with success message', () => {
  render(<Feedback message="Operation was successful!" type="success" />);
  
  // Check if the success message is rendered
  const messageElement = screen.getByText(/operation was successful!/i);
  expect(messageElement).toBeInTheDocument();
  
  // Check if the correct class is applied for success type
  const feedbackElement = screen.getByText(/operation was successful!/i).parentElement;
  expect(feedbackElement).toHaveClass('feedback-success');
});

test('renders Feedback component with error message', () => {
  render(<Feedback message="There was an error!" type="error" />);
  
  // Check if the error message is rendered
  const messageElement = screen.getByText(/there was an error!/i);
  expect(messageElement).toBeInTheDocument();
  
  // Check if the correct class is applied for error type
  const feedbackElement = screen.getByText(/there was an error!/i).parentElement;
  expect(feedbackElement).toHaveClass('feedback-error');
});

test('renders Feedback component with info message', () => {
  render(<Feedback message="This is an informational message." type="info" />);
  
  // Check if the info message is rendered
  const messageElement = screen.getByText(/this is an informational message./i);
  expect(messageElement).toBeInTheDocument();
  
  // Check if the correct class is applied for info type
  const feedbackElement = screen.getByText(/this is an informational message./i).parentElement;
  expect(feedbackElement).toHaveClass('feedback-info');
});
