import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

interface RatingButtonProps {
  initialRating?: number;
  maxRating?: number;
  onRate: (rating: number) => void;
}

const RatingButton: React.FC<RatingButtonProps> = ({
  initialRating = 0,
  maxRating = 5,
  onRate,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = (newRating: number) => {
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <View style={styles.container}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <IconButton
            key={starValue}
            icon={starValue <= rating ? 'star' : 'star-outline'}
            onPress={() => handleRate(starValue)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default RatingButton;
