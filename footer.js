// src/components/footer.js
import React from 'react';

const footer = () => {
  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement('p', null, '© 2025 W3Schools.com'),
    React.createElement('p', null, 'All Rights Reserved')
  );
};

export default footer;
