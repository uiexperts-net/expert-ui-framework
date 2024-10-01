// Rating.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Rating, { RatingProps } from './Rating'; // Ensure correct import

export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    onRate: { action: 'rated' },
  },
} as Meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalStars: 5,
  onRate: (rating: number) => console.log(`Rated: ${rating}`),
};

export const CustomRating = Template.bind({});
CustomRating.args = {
  totalStars: 10,
  onRate: (rating: number) => console.log(`Rated: ${rating}`),
};
