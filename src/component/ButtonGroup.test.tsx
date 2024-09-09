import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('renders ButtonGroup and triggers onClick', () => {
  const handleClick = jest.fn();
  render(<ButtonGroup buttons={['Button 1', 'Button 2']} onClick={handleClick} />);

  const button1 = screen.getByText('Button 1');
  fireEvent.click(button1);

  expect(handleClick).toHaveBeenCalledWith('Button 1');
});
