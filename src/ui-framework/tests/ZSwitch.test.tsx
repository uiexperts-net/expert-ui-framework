import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZSwitch from '../components/ZSwitch';
import { ZSwitchProps } from '../components/ZSwitch';

describe('ZSwitch Component', () => {
    const mockOnChange = jest.fn();

    const defaultProps: ZSwitchProps = {
        checked: false,  // assuming this is a required prop
        onChange: mockOnChange,
        // Add other required props if any
    };

    it('renders with given props', () => {
        render(<ZSwitch {...defaultProps} />);
        
        // Check if the switch is rendered
        expect(screen.getByRole('switch')).toBeInTheDocument();

        // Simulate a change event and verify the mock function was called
        fireEvent.click(screen.getByRole('switch'));
        expect(mockOnChange).toHaveBeenCalled();
    });
});
