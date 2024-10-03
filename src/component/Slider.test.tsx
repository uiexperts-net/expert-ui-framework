import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slider from './Slider';

test('renders slider and updates value', () => {
  const handleChange = jest.fn();
  render(<Slider min={0} max={100} step={1} value={50} onChange={handleChange} />);

  fireEvent.change(screen.getByRole('slider'), { target: { value: 75 } });

  expect(handleChange).toHaveBeenCalledWith(75);
});
