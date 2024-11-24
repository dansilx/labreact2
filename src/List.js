import React from 'react';

function List() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div className="p-4 mb-6 border rounded bg-gray-100">
      <h4 className="text-lg font-bold text-gray-800 mb-3">Lista de Renderização</h4>
      <ul className="list-decimal list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
