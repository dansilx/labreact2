import React, { useState } from 'react';

function Lists() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  function handleAddItem() {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  }

  function handleDeleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100">
      <h4 className="text-lg font-semibold">Listas para adição e exclusão</h4>
      <input
        className="form-control mt-3 border border-gray-300 rounded p-2 w-full"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicionar item"
      />
      <button
        className="btn btn-primary mt-3 mb-3 p-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700"
        onClick={handleAddItem}
      >
        Adicionar
      </button>
      <ul className="list-group mt-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item flex justify-between items-center p-2 mb-2 bg-white rounded shadow"
          >
            {item}
            <button
              className="btn btn-danger px-3 py-1 text-white bg-red-600 hover:bg-red-700 rounded"
              onClick={() => handleDeleteItem(index)}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
