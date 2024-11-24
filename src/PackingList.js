import React from 'react';
import Item from './Item';

function PackingList() {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
        <h4>Conditional </h4>
        <ul>
            <Item name="Camisa" isPacked={true} />
            <Item name="Calças" isPacked={false} />
            <Item name="Meias" isPacked={true} />
        </ul>
    </div>
  );
}

export default PackingList;