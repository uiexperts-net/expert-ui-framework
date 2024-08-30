import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZTextField from '../components/ZTextField';
import { ZTextFieldProps } from '../components/ZTextField';

describe('ZTextField Component', () => {
    const mockOnChange = jest.fn();

    const defaultProps: ZTextFieldProps = {
        label: 'Test Label',
        value: 'Test Value',  // required prop
        onChange: mockOnChange,  // required prop
    };

    it('renders with given props', () => {
        render(<ZTextField {...defaultProps} />);
        
        // Check if the label is rendered
        expect(screen.getByText(defaultProps.label)).toBeInTheDocument();

        // Simulate a change event and verify the mock function was called
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Value' } });
        expect(mockOnChange).toHaveBeenCalled();
    });
});
