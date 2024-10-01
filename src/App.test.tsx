
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('should initially render the loading screen', () => {
    render(<App />);
    
    // Assuming your app shows a loading indicator (like a spinner or logo) initially
    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();
  });

  it('should display the welcome message after loading', async () => {
    render(<App />);
    
    // Wait for the loading phase to finish (if there's a delay in showing the content)
    await waitFor(() => expect(screen.getByText('Welcome to the app!')).toBeInTheDocument());
  });

  it('should display the "Sync Contact" button after loading', async () => {
    render(<App />);
    
    // Wait for the app to finish loading
    await waitFor(() => expect(screen.getByText('Sync Contact')).toBeInTheDocument());
  });
});

// Add this line to make the file a module
export {};



import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hmgrp component inside App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Manager/i);
  expect(linkElement).toBeInTheDocument();
});


import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust if the path is different

test('renders contact manager title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Contact Manager/i);
  expect(titleElement).toBeInTheDocument();
});


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


// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Adjust the import path if needed

test('renders Navigation component and checks link functionality', () => {
  render(<App />);

  // Check if the Navigation component is rendered
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});


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


