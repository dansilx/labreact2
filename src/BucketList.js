import React, { useState } from 'react';

function BucketList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Go to Japan', completed: false },
    { id: 2, text: 'Learn React', completed: false },
  ]);

  function toggleItem(id) {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100">
      <h4 className="text-lg font-semibold">Bucket List</h4>
      <ul className="mt-3 space-y-2">
        {items.map(item => (
          <li
            key={item.id}
            className="flex items-center gap-3 p-2 rounded-lg bg-white shadow-md"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
            />
            <span
              className={`text-sm ${item.completed ? 'line-through text-gray-400' : ''}`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
