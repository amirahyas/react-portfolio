// components/Header.js

import React from 'react';

const Header = ({ currentSection, onNavigationClick }) => {
  const navigationTitles = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Developer's Name</h1>
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
    </header>
  );
};

export default Header;
