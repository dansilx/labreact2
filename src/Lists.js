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
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Listas para adição e exclusão</h4>
        <input class="form-control" 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)} 
            placeholder="Adicionar item" 
        />
        <button class="btn btn-success mt-3 mb-3" onClick={handleAddItem}>Adicionar</button>
        <ul class="list-group">
            {items.map((item, index) => (
            <li class="list-group-item" key={index}>
                {item}
                <button class="btn btn-success" onClick={() => handleDeleteItem(index)} >
                Deletar
                </button>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Lists;