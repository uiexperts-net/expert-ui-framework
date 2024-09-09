import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZToggleButton from '../components/ZToggleButton';
import { ZToggleButtonProps } from '../components/ZToggleButton';

describe('ZToggleButton Component', () => {
    const mockOnChange = jest.fn();

    // Use a string for value
    const defaultProps: ZToggleButtonProps = {
        value: 'selected', // Use a string here
        onChange: mockOnChange,
    };

    it('renders with given props and handles change events', () => {
        render(<ZToggleButton {...defaultProps} />);
        
        // Simulate a click event and verify the mock function was called
        fireEvent.click(screen.getByRole('button'));
        expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), 'deselected');
    });
});
