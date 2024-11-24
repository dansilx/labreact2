import React from 'react';

function List() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div className="p-3 mb-3 border rounded bg-light">
        <h4>Lista de Renderização</h4>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );
}

export default List;