import { render, fireEvent } from '@testing-library/react';
import Rating from './Rating';

test('renders Rating component with stars', () => {
  const { getAllByRole } = render(<Rating totalStars={5} onRate={() => {}} />);
  const stars = getAllByRole('button');
  expect(stars.length).toBe(5);
});

test('calls onRate when a star is clicked', () => {
  const handleRate = jest.fn();
  const { getAllByRole } = render(<Rating totalStars={5} onRate={handleRate} />);

  fireEvent.click(getAllByRole('button')[2]); // Click 3rd star
  expect(handleRate).toHaveBeenCalledWith(3);
});
