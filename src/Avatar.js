import React from 'react';

function Avatar({ person, size = 100 }) {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
        <h4>Props</h4>
        <img
        src={person.image}
        alt={person.name}
        width={size}
        height={size}
        />
    </div>
  );
}

export default Avatar;