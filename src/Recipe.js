import React from 'react';

function Recipe({ ingredientes }) {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
        <h4>Componentes Puros</h4>
        <ul>
            {ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
            ))}
        </ul>
    </div>
  );
}

export default Recipe;