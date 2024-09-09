
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


import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from './App';

test('renders Feedback component and checks functionality', () => {
  render(<App />);

  // Check if the Feedback component is rendered with the correct initial message
  const initialMessageElement = screen.getByText(/initial feedback message/i);
  expect(initialMessageElement).toBeInTheDocument();

  // Check if the Feedback component has the correct class for the initial type
  const feedbackElement = screen.getByText(/initial feedback message/i).parentElement;
  expect(feedbackElement).toHaveClass('feedback-info'); // Assuming the initial type is 'info'

  // Simulate a button click to change the feedback message
  const changeButton = screen.getByRole('button', { name: /Change Feedback/i });
  fireEvent.click(changeButton);

  // Check if the Feedback component updates with the new message
  const updatedMessageElement = screen.getByText(/updated feedback message/i);
  expect(updatedMessageElement).toBeInTheDocument();

  // Check if the Feedback component has the correct class for the updated type
  const updatedFeedbackElement = screen.getByText(/updated feedback message/i).parentElement;
  expect(updatedFeedbackElement).toHaveClass('feedback-success'); // Assuming the updated type is 'success'
});



