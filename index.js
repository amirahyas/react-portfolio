// App.js

import React, { useState } from 'react';
import Header from './src/components/Header';
import AboutMe from './src/components/AboutMe';
import Portfolio from './src/components/Portfolio';
import Contact from './src/components/Contact';
import Resume from './src/components/Resume';
import Footer from './src/components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header currentSection={currentSection} onNavigationClick={handleNavigationClick} />
      
      {currentSection === 'About Me' && <AboutMe />}
      {currentSection === 'Portfolio' && <Portfolio />}
      {currentSection === 'Contact' && <Contact />}
      {currentSection === 'Resume' && <Resume />}

      <Footer />
    </div>
  );
}

export default App;
