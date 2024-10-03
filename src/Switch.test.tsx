// src/Switch.test.tsx
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from './Switch';

test('Switch component toggles on and off', () => {
  const SwitchWrapper = () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={() => setChecked(!checked)} />;
  };

  render(<SwitchWrapper />);

  // Look for the switch using the role 'checkbox', since it's an input of type checkbox
  const switchInput = screen.getByRole('checkbox');

  // Initially, the switch should be unchecked
  expect(switchInput).not.toBeChecked();

  // Simulate a click on the switch to check it
  fireEvent.click(switchInput);
  expect(switchInput).toBeChecked();

  // Simulate another click to uncheck it
  fireEvent.click(switchInput);
  expect(switchInput).not.toBeChecked();
});
