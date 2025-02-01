// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return React.createElement(
    'section',
    { className: 'hero-section' },
    React.createElement('h1', null, 'Welcome to W3Schools'),
    React.createElement('p', null, 'Learn Web Development, Tutorials, References & Exercises'),
    React.createElement(
      'button',
      { className: 'cta-button' },
      'Start Learning'
    )
  );
};

export default HeroSection;
