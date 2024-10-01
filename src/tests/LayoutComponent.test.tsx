import React from 'react';
import { render } from '@testing-library/react-native';
import LayoutComponent from '../components/LayoutComponent';

describe('LayoutComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LayoutComponent />);
    expect(getByText('This is a layout component using React Native Paper.')).toBeTruthy();
  });
});
