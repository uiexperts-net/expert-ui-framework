import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField, { TextFieldProps } from './TextField';

describe('TextField Component', () => {
  // Mock function for the onChange prop
  const onChangeMock = jest.fn();

  test('renders with given value and placeholder', () => {
    render(<TextField value="Test Value" placeholder="Enter text" onChange={onChangeMock} />);

    // Check if the value is rendered
    const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Test Value');
  });

  test('calls onChange function when text is changed', () => {
    render(<TextField value="" placeholder="Enter text" onChange={onChangeMock} />);

    const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;

    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    // Check if the mock function was called
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object)); // Optionally check the event
  });
});
