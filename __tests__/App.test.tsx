import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App Component', () => {
  it('renders correctly', with suggestions', () => {
    const { getByLabelText, getByText } = render(<App />);
    
    expect(getByLabelText('Search')).toBeTruthy();

    // Simulate typing into the search box
    fireEvent.changeText(getByLabelText('Search'), 'ban');

    // Expect the filtered suggestion to appear
    expect(getByText('Banana')).toBeTruthy();
  });

  it('selects an item correctly', () => {
    const { getByLabelText, getByText } = render(<App />);

    // Simulate typing into the search box
    fireEvent.changeText(getByLabelText('Search'), 'apple');

    // Simulate selecting an item
    fireEvent.press(getByText('Apple'));

    // Expect the search box to be updated with the selected item
    expect(getByLabelText('Search').props.value).toBe('Apple');
  });
});
