import React from 'react';
import { render, screen } from '@testing-library/react';
import ZButtonGroup from '../components/ZButtonGroup';

test('renders button group', () => {
    render(<ZButtonGroup />);
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
});
