import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FloatingActionButton from './FloatingActionButton';

test('renders FloatingActionButton and triggers click event', () => {
  const onClick = jest.fn();
  render(<FloatingActionButton icon="fas fa-plus" onClick={onClick} />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
