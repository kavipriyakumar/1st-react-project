// src/components/tutorials.js
import React from 'react';

const tutorials = () => {
  const tutorialList = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL'];

  return React.createElement(
    'section',
    { className: 'tutorials' },
    React.createElement('h2', null, 'Popular Tutorials'),
    React.createElement(
      'div',
      { className: 'tutorials-list' },
      tutorialList.map((tutorial, index) => {
        return React.createElement(
          'div',
          { key: index, className: 'tutorial-card' },
          React.createElement('h3', null, tutorial),
          React.createElement('p', null, `Learn ${tutorial} from scratch`),
          React.createElement(
            'button',
            null,
            'Start Learning'
          )
        );
      })
    )
  );
};

export default tutorials;
