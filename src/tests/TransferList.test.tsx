// src/tests/TransferList.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TransferList from '../components/TransferList';

const items = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

test('renders TransferList component', () => {
  const { getByText } = render(
    <TransferList items={items} onTransfer={() => {}} />
  );

  expect(getByText('Transfer List')).toBeTruthy();
  expect(getByText('Item 1')).toBeTruthy();
});

test('selects and transfers items', () => {
  const onTransferMock = jest.fn();
  const { getByText } = render(
    <TransferList items={items} onTransfer={onTransferMock} />
  );

  fireEvent.press(getByText('Item 1'));
  fireEvent.press(getByText('Transfer'));

  expect(onTransferMock).toHaveBeenCalledWith([{ id: '1', title: 'Item 1' }]);
});
