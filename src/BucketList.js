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
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Bucket List</h4>
        <ul class="list-group">
            {items.map(item => (
            <li class="list-group-item" key={item.id}>
                <input class="form-check-input"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                />
                <span
                    style={{
                        textDecoration: item.completed ? 'line-through' : 'none',
                    }}
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