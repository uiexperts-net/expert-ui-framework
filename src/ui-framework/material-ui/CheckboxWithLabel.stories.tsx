// src/ui-framework/material-ui/CheckboxWithLabel.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ZCheckboxWithLabel } from './CheckboxWithLabel';
import { CheckboxProps } from '@mui/material';

const meta: Meta<typeof ZCheckboxWithLabel> = {
  title: 'Material-UI/CheckboxWithLabel',
  component: ZCheckboxWithLabel,
  argTypes: {
    checkboxProps: {
      control: {
        type: 'object',
      },
      defaultValue: {
        checked: false,
        color: 'primary',
        disabled: false,
      },
    },
    label: { control: 'text' },
    labelPlacement: {
      control: 'select',
      options: ['end', 'start', 'top', 'bottom'],
    },
    onChange: { action: 'changed' }, // Automatically handles the onChange event
  },
};

export default meta;

const Template: StoryFn<typeof ZCheckboxWithLabel> = (args) => <ZCheckboxWithLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  checkboxProps: {
    checked: false,
    color: 'primary',
    disabled: false,
  },
  label: 'Label',
  labelPlacement: 'end',
};

export const Checked = Template.bind({});
Checked.args = {
  checkboxProps: {
    checked: true,
    color: 'primary',
    disabled: false,
  },
  label: 'Checked Label',
  labelPlacement: 'end',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checkboxProps: {
    checked: false,
    color: 'primary',
    disabled: true,
  },
  label: 'Disabled Label',
  labelPlacement: 'end',
};

export const LabelPlacementTop = Template.bind({});
LabelPlacementTop.args = {
  checkboxProps: {
    checked: false,
    color: 'primary',
    disabled: false,
  },
  label: 'Label on Top',
  labelPlacement: 'top',
};

export const LabelPlacementBottom = Template.bind({});
LabelPlacementBottom.args = {
  checkboxProps: {
    checked: false,
    color: 'primary',
    disabled: false,
  },
  label: 'Label on Bottom',
  labelPlacement: 'bottom',
};
