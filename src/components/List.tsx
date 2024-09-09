import React from 'react';

interface ListProps {
  items: string[];
  onItemClick?: (item: string) => void;
}

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onItemClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
