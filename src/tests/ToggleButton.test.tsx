// src/tests/ToggleButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ToggleButton from '../components/ToggleButton';

test('renders ToggleButton component', () => {
  const { getByText } = render(<ToggleButton onToggle={() => {}} />);

  expect(getByText('OFF')).toBeTruthy();
});

test('toggles button state on press', () => {
  const onToggleMock = jest.fn();
  const { getByText } = render(<ToggleButton onToggle={onToggleMock} />);

  fireEvent.press(getByText('OFF'));
  expect(onToggleMock).toHaveBeenCalledWith(true);
  expect(getByText('ON')).toBeTruthy();

  fireEvent.press(getByText('ON'));
  expect(onToggleMock).toHaveBeenCalledWith(false);
  expect(getByText('OFF')).toBeTruthy();
});
