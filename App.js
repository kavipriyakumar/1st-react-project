// src/App.js
import React from 'react';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection .js';
import tutorials from './components/tutorials.js';  
import footer from './components/footer.js';  

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(Navbar),
    React.createElement(HeroSection),
    React.createElement(tutorials),  
    React.createElement(footer)  
  );
};

export default App;
