// src/ToggleButton.test.tsx
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleButton from './ToggleButton';

test('ToggleButton switches state on click', () => {
  const ToggleButtonWrapper = () => {
    const [toggled, setToggled] = useState(false);
    return <ToggleButton toggled={toggled} onToggle={() => setToggled(!toggled)} />;
  };

  // Render the wrapper component
  render(<ToggleButtonWrapper />);

  const button = screen.getByRole('button', { name: 'OFF' });

  // Initially, the button should display "OFF"
  expect(button).toHaveTextContent('OFF');

  // Simulate a click on the button to toggle it ON
  fireEvent.click(button);
  expect(button).toHaveTextContent('ON');

  // Simulate another click to toggle it OFF again
  fireEvent.click(button);
  expect(button).toHaveTextContent('OFF');
});
