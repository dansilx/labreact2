import React from 'react';

function Item({ name, isPacked }) {
  return (
    <div className="p-2 mb-3 border rounded bg-gray-50 shadow-md">
      <li className="text-lg font-medium text-gray-800 flex items-center">
        {name} {isPacked && <span className="ml-2 text-green-500">✔</span>}
      </li>
    </div>
  );
}

export default Item;
