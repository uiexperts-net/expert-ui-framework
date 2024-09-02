// src/tests/FloatingActionButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatingActionButton from '../components/FloatingActionButton';

test('renders FloatingActionButton component', () => {
  const { getByRole } = render(
    <FloatingActionButton onPress={() => {}} icon="plus" />
  );

  expect(getByRole('button')).toBeTruthy();
});

test('calls onPress handler when pressed', () => {
  const onPressMock = jest.fn();
  const { getByRole } = render(
    <FloatingActionButton onPress={onPressMock} icon="plus" />
  );

  fireEvent.press(getByRole('button'));
  expect(onPressMock).toHaveBeenCalled();
});
