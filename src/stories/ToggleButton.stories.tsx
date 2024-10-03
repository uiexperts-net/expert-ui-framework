import { Meta, StoryFn } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from '../ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as Meta;

const Template: StoryFn<ToggleButtonProps> = (args) => (
  <ToggleButton {...args} />
);

export const DefaultToggleButton = Template.bind({});

DefaultToggleButton.args = {
  toggled: false,
  onToggle: (toggled: boolean) => {
    console.log('Toggle button toggled:', toggled);
  },
};
