import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light" onMouseMove={handleMouseMove}>
        <h4>Moving Dot</h4>
        <p class="mt-3">O mouse está na posição: ({position.x}, {position.y})</p>
    </div>
  );
}

export default MovingDot;