import React from 'react';

function Avatar({ person, size = 100 }) {
  return (
    <div className="p-4 mb-6 border rounded bg-gray-100 flex flex-col items-center">
      <h4 className="text-lg font-bold text-gray-800 mb-3">Props</h4>
      <img
        src={person.image}
        alt={person.name}
        width={size}
        height={size}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}

export default Avatar;
