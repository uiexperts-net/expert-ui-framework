import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';
import React from 'react';

test('TextField component updates value', () => {
  const handleChange = jest.fn();
  render(<TextField value="" onChange={handleChange} />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Hello' } });

  expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
});
