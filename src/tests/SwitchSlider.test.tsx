// src/tests/SwitchSlider.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SwitchSlider from '../components/SwitchSlider';

describe('SwitchSlider', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<SwitchSlider label="Test Switch" initial={false} />);
    expect(getByText('Test Switch')).toBeTruthy();
  });

  it('toggles switch state when pressed', () => {
    const { getByTestId } = render(<SwitchSlider label="Test Switch" initial={false} />);
    const switchElement = getByTestId('switch');

    fireEvent.press(switchElement);
    expect(switchElement.props.value).toBe(true);
  });
});
