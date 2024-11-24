import React from 'react';
import Item from './Item';

function PackingList() {
  return (
    <div className="p-4 mb-6 border rounded bg-gray-100">
      <h4 className="text-lg font-bold text-gray-800 mb-3">Conditional</h4>
      <ul className="list-disc list-inside">
        <Item name="Camisa" isPacked={true} />
        <Item name="Calças" isPacked={false} />
        <Item name="Meias" isPacked={true} />
      </ul>
    </div>
  );
}

export default PackingList;
