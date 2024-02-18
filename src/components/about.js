// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="AboutMe">
        <div className="avatar-container">
          {/* Include your avatar or photo here */}
          <img src="your-avatar-image-url" alt="Your Avatar" />
        </div>
        <div className="bio">
          <p>
            Hello! I'm [Your Name], a passionate web developer with experience in building
            modern web applications.
          </p>
          <p>
            I enjoy turning ideas into reality through code and am always eager to learn new
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
