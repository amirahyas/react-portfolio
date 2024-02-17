// components/Navbar.js
import React from 'react';

const Navbar = ({ currentSection, onNavigationClick }) => {
  const navigationTitles = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {navigationTitles.map((title) => (
        <button
          key={title}
          onClick={() => onNavigationClick(title)}
          className={currentSection === title ? 'active' : ''}
        >
          {title}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
