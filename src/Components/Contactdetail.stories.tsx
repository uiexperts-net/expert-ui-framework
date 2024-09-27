import React from 'react';
import ContactDetail from './Contactdetail';
import { Meta, StoryFn } from '@storybook/react';

// Define the component's default export
const meta: Meta = {
  title: 'Components/ContactDetail',
  component: ContactDetail,
};

export default meta;

// Create a default story using StoryFn
const Template: StoryFn = () => <ContactDetail name="Priyadharshini T" phoneNumber="9344334333" />;

// Create a default story
export const Default = Template.bind({});
Default.args = {
  name: 'Priyadharshini T',
  phoneNumber: '9344334333',
};
