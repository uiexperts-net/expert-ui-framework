import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioButton from '../RadioButton';

describe('MyRadioButton', () => {
  it('should render the radio button with the correct label', () => {
    const { getByText } = render(
      <RadioButton value="test" label="Test Label" status="unchecked" onPress={() => {}} />
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <RadioButton value="test" label="Test Label" status="unchecked" onPress={onPressMock} />
    );

    fireEvent.press(getByText('Test Label'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
