import React from 'react';

export interface NavigationProps {
  links: { label: string; href: string }[]; // Example type for links
  activeLink: string;
  onLinkClick: (link: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ links, activeLink, onLinkClick }) => {
  return (
    <nav>
      <ul className="nav">
        {links.map((link) => (
          <li
            key={link.href}
            className={`nav-item ${activeLink === link.href ? 'active-link' : ''}`}
          >
            <a
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
