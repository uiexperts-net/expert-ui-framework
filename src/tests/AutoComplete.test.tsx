import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AutoComplete from '../components/AutoComplete';

describe('AutoComplete Component', () => {
  const suggestions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  it('renders correctly', () => {
    const { getByLabelText } = render(
      <AutoComplete suggestions={suggestions} onSelect={jest.fn()} />
    );
    expect(getByLabelText('Search')).toBeTruthy();
  });

  it('filters suggestions based on input', () => {
    const { getByLabelText, getByText } = render(
      <AutoComplete suggestions={suggestions} onSelect={jest.fn()} />
    );
    fireEvent.changeText(getByLabelText('Search'), 'app');
    expect(getByText('Apple')).toBeTruthy();
  });

  it('calls onSelect when a suggestion is selected', () => {
    const onSelect = jest.fn();
    const { getByLabelText, getByText } = render(
      <AutoComplete suggestions={suggestions} onSelect={onSelect} />
    );
    fireEvent.changeText(getByLabelText('Search'), 'ban');
    fireEvent.press(getByText('Banana'));
    expect(onSelect).toHaveBeenCalledWith('banana');
  });
});
