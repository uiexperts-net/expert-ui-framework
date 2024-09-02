// src/component/Switch.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from './Switch';

describe('Switch Component', () => {
  test('renders the Switch component', () => {
    render(<Switch isOn={false} onToggle={() => {}} />);
    const switchElement = screen.getByTestId('switch-button');
    expect(switchElement).toBeInTheDocument();
  });

  test('calls onToggle when clicked', () => {
    const onToggleMock = jest.fn();
    render(<Switch isOn={false} onToggle={onToggleMock} />);
    const switchElement = screen.getByTestId('switch-button');
    fireEvent.click(switchElement);
    expect(onToggleMock).toHaveBeenCalled();
  });
});
