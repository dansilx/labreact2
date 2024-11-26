import React, { useState } from 'react';

function ShapeEditor() {
  const [shape, setShape] = useState({ color: 'blue', size: 50 });

  function changeColor() {
    setShape({ ...shape, color: shape.color === 'blue' ? 'red' : 'blue' });
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100 flex flex-col justify-center items-center">
      <h4 className="text-lg font-semibold">Shape Editor</h4>
      <div
        style={{ backgroundColor: shape.color, width: shape.size, height: shape.size }}
        className="mt-3"
      />
      <button
        className="btn btn-primary mt-3"
        onClick={changeColor}
      >
        Mudar Cor
      </button>
    </div>
  );
}

export default ShapeEditor;
