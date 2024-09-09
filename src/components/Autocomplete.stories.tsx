import React from 'react';
import { Meta, Story } from '@storybook/react-native'; // Correctly import Story
import Autocomplete from './Autocomplete';
import { View, StyleSheet } from 'react-native';

export default {
  title: 'Autocomplete',
  component: Autocomplete,
} as Meta<typeof Autocomplete>;

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

const Template: Story<{ suggestions: string[] }> = (args) => (
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
