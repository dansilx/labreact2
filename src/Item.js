import React from 'react';

function Item({ name, isPacked }) {
    return (
      <div className="p-3 mb-3 border rounded bg-light">
        <li>
          {name} {isPacked ? '✔' : null}
        </li>
      </div>
    );
  }
  
  export default Item;