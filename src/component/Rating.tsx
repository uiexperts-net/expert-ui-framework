// Rating.tsx
import React, { useState } from 'react';

export interface RatingProps {
  totalStars: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ totalStars, onRate }) => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    onRate(rating);
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starRating = index + 1;
        const isSelected = starRating <= selectedRating;
        
        return (
          <svg
            key={index}
            data-testid="star"
            role="button"
            onClick={() => handleClick(starRating)}
            color={isSelected ? '#FFD700' : '#e4e5e9'} // Golden color for selected, gray otherwise
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            style={{
              color: isSelected ? '#FFD700' : '#e4e5e9',
              cursor: 'pointer',
              marginRight: '5px',
            }}
            viewBox="0 0 576 512"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
