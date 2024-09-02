// src/tests/TextField.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextField from '../components/TextField';

describe('TextField', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(
      <TextField
        label="Username"
        value=""
        onChangeText={() => {}}
      />
    );
    expect(getByText('Username')).toBeTruthy();
  });

  it('displays entered text', () => {
    const { getByPlaceholderText } = render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        value="JohnDoe"
        onChangeText={() => {}}
      />
    );
    const input = getByPlaceholderText('Enter your username');
    expect(input.props.value).toBe('JohnDoe');
  });

  it('calls onChangeText when text changes', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField
        label="Username"
        placeholder="Enter your username"
        value=""
        onChangeText={mockOnChangeText}
      />
    );
    const input = getByPlaceholderText('Enter your username');
    fireEvent.changeText(input, 'JaneDoe');
    expect(mockOnChangeText).toHaveBeenCalledWith('JaneDoe');
  });
});
