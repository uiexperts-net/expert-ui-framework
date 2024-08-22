import React from 'react';
import {  Meta } from '@storybook/react-native';
import Autocomplete from './Autocomplete';
import { View, StyleSheet } from 'react-native';
import Story

export default {
  title: 'Autocomplete',
  component: Autocomplete,
} as Meta;

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

const Template: Story = (args) => (
  <View style={styles.container}>
    <Autocomplete {...args} />
  </View>
);

export const Default = Template.bind({});
Default.args = {
  suggestions,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
