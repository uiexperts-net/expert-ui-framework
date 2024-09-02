import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CheckboxComponent from '../components/CheckboxComponent';

describe('CheckboxComponent', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <CheckboxComponent
        label="Check me!"
        checked={false}
        onChange={() => {}}
      />
    );
    expect(getByText('Check me!')).toBeTruthy();
  });

  it('calls onChange when clicked', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <CheckboxComponent
        label="Check me!"
        checked={false}
        onChange={onChangeMock}
      />
    );
    fireEvent.press(getByRole('checkbox'));
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it('displays checked state', () => {
    const { getByRole } = render(
      <CheckboxComponent
        label="Check me!"
        checked={true}
        onChange={() => {}}
      />
    );
    expect(getByRole('checkbox')).toHaveProp('status', 'checked');
  });
});
