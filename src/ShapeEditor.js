import React, { useState } from 'react';

function ShapeEditor() {
  const [shape, setShape] = useState({ color: 'blue', size: 50 });

  function changeColor() {
    setShape({ ...shape, color: shape.color === 'blue' ? 'red' : 'blue' });
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light d-flex flex-column justify-content-center align-items-center">
        <h4>Shape Editor</h4>
        <div style={{ backgroundColor: shape.color, width: shape.size, height: shape.size }} />
        <button class="btn btn-success mt-3" onClick={changeColor}>Mudar Cor</button>
    </div>
  );
}

export default ShapeEditor;