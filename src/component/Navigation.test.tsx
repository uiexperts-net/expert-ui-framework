// src/component/Navigation.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation'; // Adjust the import path if needed

test('shows active class on the active link', () => {
  const handleLinkClick = jest.fn();

  render(
    <Navigation
      links={[
        { label: 'Home', href: '/home' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeLink="/about"
      onLinkClick={handleLinkClick}
    />
  );

  const activeLinkElement = screen.getByText(/about/i).parentElement;

  expect(activeLinkElement).toHaveClass('active-link'); // Update this class to match your actual CSS class
});
