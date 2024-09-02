import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DropDown from '../components/DropDown';

describe('DropDown', () => {
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders correctly and opens the menu', () => {
    const { getByText, queryByText } = render(
      <DropDown
        items={items}
        onSelect={() => {}}
      />
    );

    expect(getByText('Select an item')).toBeTruthy();
    fireEvent.press(getByText('Select an item'));
    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();
    expect(getByText('Option 3')).toBeTruthy();
  });

  it('selects an item and calls onSelect', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <DropDown
        items={items}
        onSelect={onSelectMock}
      />
    );

    fireEvent.press(getByText('Select an item'));
    fireEvent.press(getByText('Option 2'));

    expect(onSelectMock).toHaveBeenCalledWith('option2');
    expect(getByText('Option 2')).toBeTruthy();
  });
});
