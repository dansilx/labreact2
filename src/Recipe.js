import React from 'react';

function Recipe({ ingredientes }) {
  return (
    <div className="p-4 mb-6 border rounded bg-gray-100">
      <h4 className="text-lg font-bold text-gray-800 mb-3">Componentes Puros</h4>
      <ul className="list-disc list-inside">
        {ingredientes.map((ingrediente, index) => (
          <li key={index} className="text-gray-700">{ingrediente}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
