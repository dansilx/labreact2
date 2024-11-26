import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100" onMouseMove={handleMouseMove}>
      <h4 className="text-lg font-semibold">Moving Dot</h4>
      <p className="mt-3">O mouse está na posição: ({position.x}, {position.y})</p>
    </div>
  );
}

export default MovingDot;
