import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from '../components/List';

describe('List Component', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  it('renders without crashing', () => {
    render(<List items={items} />);
  });

  it('displays the correct number of items', () => {
    const { getAllByRole } = render(<List items={items} />);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(items.length);
  });

  it('calls onItemClick when an item is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<List items={items} onItemClick={handleClick} />);
    fireEvent.click(getByText('Item 1'));
    expect(handleClick).toHaveBeenCalledWith('Item 1');
  });
});
