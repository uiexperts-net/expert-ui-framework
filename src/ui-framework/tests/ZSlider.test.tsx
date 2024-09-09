import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZSlider from '../components/ZSlider';

test('renders slider and changes value', () => {
    render(<ZSlider value={0} onChange={function (event: Event, newValue: number | number[]): void {
        throw new Error('Function not implemented.');
    } } />);
    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: 50 } });
    expect(slider).toHaveValue('50');
});
