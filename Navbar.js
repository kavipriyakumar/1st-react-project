// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: 'logo' },
      React.createElement('h1', null, 'W3Schools')
    ),
    React.createElement(
      'ul',
      { className: 'nav-links' },
      React.createElement('li', null, React.createElement('a', { href: '#' }, 'Home')),
      React.createElement('li', null, React.createElement('a', { href: '#' }, 'Learn')),
      React.createElement('li', null, React.createElement('a', { href: '#' }, 'Tutorials')),
      React.createElement('li', null, React.createElement('a', { href: '#' }, 'References')),
      React.createElement('li', null, React.createElement('a', { href: '#' }, 'Exercises'))
    )
  );
};

export default Navbar;
