// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="AboutMe">
        <div className="avatar-container">
          
          <img src="avatar.png" alt= "Avatar" />
        </div>
        <div className="bio">
          <p>
            Hello! I'm Amirah Bullock, a passionate web developer with experience in building
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
