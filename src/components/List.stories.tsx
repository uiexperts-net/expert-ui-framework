import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import List from '../components/List.tsx';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: StoryFn<{ items: string[]; onItemClick: (item: string) => void }> = (args) => (
  <List {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  onItemClick: (item) => alert(`You clicked on ${item}`),
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  onItemClick: () => {},
};
