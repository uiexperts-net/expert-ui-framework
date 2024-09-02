import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonGroup from '../components/ButtonGroup';

describe('ButtonGroup', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <ButtonGroup
        buttons={[
          { label: 'Button 1', onPress: () => {} },
          { label: 'Button 2', onPress: () => {} },
        ]}
      />
    );
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
  });

  it('handles button presses correctly', () => {
    const onPressMock1 = jest.fn();
    const onPressMock2 = jest.fn();
    
    const { getByText } = render(
      <ButtonGroup
        buttons={[
          { label: 'Button 1', onPress: onPressMock1 },
          { label: 'Button 2', onPress: onPressMock2 },
        ]}
      />
    );

    fireEvent.press(getByText('Button 1'));
    fireEvent.press(getByText('Button 2'));

    expect(onPressMock1).toHaveBeenCalled();
    expect(onPressMock2).toHaveBeenCalled();
  });

  it('applies different button modes', () => {
    const { getByText } = render(
      <ButtonGroup
        buttons={[
          { label: 'Contained', onPress: () => {}, mode: 'contained' },
          { label: 'Outlined', onPress: () => {}, mode: 'outlined' },
          { label: 'Text', onPress: () => {}, mode: 'text' },
        ]}
      />
    );

    // Check button modes (you may need to adjust depending on how modes are rendered in your styles)
    expect(getByText('Contained')).toHaveProp('mode', 'contained');
    expect(getByText('Outlined')).toHaveProp('mode', 'outlined');
    expect(getByText('Text')).toHaveProp('mode', 'text');
  });
});
