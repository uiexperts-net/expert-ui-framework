import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZRadioGroup from '../components/ZRadioGroup';
import { ZRadioGroupProps } from '../components/ZRadioGroup';

describe('ZRadioGroup Component', () => {
    const mockOnChange = jest.fn();

    const defaultProps: ZRadioGroupProps = {
        options: ['Option 1', 'Option 2', 'Option 3'],
        value: 'Option 1',
        onChange: mockOnChange,
    };

    it('renders with given props', () => {
        render(<ZRadioGroup {...defaultProps} />);
        
        // Check if the options are rendered
        defaultProps.options.forEach(option => {
            expect(screen.getByLabelText(option)).toBeInTheDocument();
        });

        // Simulate a change event and verify the mock function was called
        fireEvent.change(screen.getByLabelText('Option 2'), { target: { value: 'Option 2' } });
        expect(mockOnChange).toHaveBeenCalled();
    });
});
