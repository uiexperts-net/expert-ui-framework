import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RatingButton from '../components/RatingButton';

describe('RatingButton Component', () => {
  it('renders correctly with default props', () => {
    const { getAllByRole } = render(<RatingButton onRate={jest.fn()} />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(5); // Default maxRating is 5
  });

  it('renders correctly with custom max rating', () => {
    const { getAllByRole } = render(<RatingButton maxRating={10} onRate={jest.fn()} />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(10); // Custom maxRating is 10
  });

  it('handles rating correctly', () => {
    const onRateMock = jest.fn();
    const { getAllByRole } = render(<RatingButton onRate={onRateMock} />);
    const buttons = getAllByRole('button');

    fireEvent.press(buttons[2]); // Simulate pressing the third star
    expect(onRateMock).toHaveBeenCalledWith(3);
  });
});
