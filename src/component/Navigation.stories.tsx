import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navigation, { NavigationProps } from './Navigation';

// Define the Storybook metadata for the Navigation component
const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    onLinkClick: { action: 'clicked' },
  },
};

export default meta;

// Define a template for the Navigation component stories
const Template: StoryFn<NavigationProps> = (args) => <Navigation {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  links: [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  activeLink: '/home',
};

// Define a story with a different active link
export const AboutActive = Template.bind({});
AboutActive.args = {
  links: [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  activeLink: '/about',
};

// Define a story with a different set of links
export const CustomLinks = Template.bind({});
CustomLinks.args = {
  links: [
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Services', href: '/services' },
  ],
  activeLink: '/services',
};
