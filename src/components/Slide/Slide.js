import React from 'react';
import './style.css';
const Slide = ({ slide }) => {
  return (
    <div>
      <aside
        style={{
          display: 'block',
        }}
      >
        <div>
          {' '}
          <h1>{slide?.name}</h1>
          <p>{slide?.login}</p>
          <p>{slide?.bio}</p>
          <p>{slide?.public_repos}</p>
          <p>{slide?.followers}</p>
          <p>{slide?.following}</p>{' '}
        </div>
      </aside>
    </div>
  );
};

export default Slide;
