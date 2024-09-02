import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RatingButton from '../components/RatingButton';
import { action } from '@storybook/addon-actions';

storiesOf('RatingButton', module)
  .add('default', () => (
    <RatingButton initialRating={3} onRate={action('Rated')} />
  ))
  .add('custom max rating', () => (
    <RatingButton initialRating={2} maxRating={10} onRate={action('Rated')} />
  ));
