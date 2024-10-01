import React from 'react';
import { render, screen } from '@testing-library/react';
import ZRating from '../components/ZRating';
import userEvent from '@testing-library/user-event';

test('renders rating component and allows user to select a rating', () => {
    render(<ZRating value={0} onChange={function (event: React.ChangeEvent<{}>, newValue: number | null): void {
        throw new Error('Function not implemented.');
    } } />);
    const ratingComponent = screen.getByRole('radio', { name: '3 Stars' });

    userEvent.click(ratingComponent);
    expect(ratingComponent).toHaveAttribute('aria-checked', 'true');
});
