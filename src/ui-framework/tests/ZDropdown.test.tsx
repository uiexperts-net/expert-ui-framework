import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZDropdown from '../components/ZDropdown';
import { ZDropdownProps } from '../components/ZDropdown';

describe('ZDropdown Component', () => {
    const mockOnChange = jest.fn();

    const defaultProps: ZDropdownProps = {
        label: 'Select an Option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        value: 'Option 1',
        onChange: mockOnChange,
    };

    it('renders with given props', () => {
        render(<ZDropdown {...defaultProps} />);
        
        // Check if the label is rendered
        expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
        
        // Check if the options are rendered
        defaultProps.options.forEach(option => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });

        // Simulate a change event and verify the mock function was called
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
        expect(mockOnChange).toHaveBeenCalled();
    });
});
