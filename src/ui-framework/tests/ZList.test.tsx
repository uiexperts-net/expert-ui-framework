import React from 'react';
import { render, screen } from '@testing-library/react';
import ZList from '../components/ZList';

test('renders list with provided items', () => {
    render(<ZList items={['Item 1', 'Item 2', 'Item 3']} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
});
