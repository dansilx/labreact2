import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 mb-6 border rounded bg-gray-50 shadow-md">
      <h4 className="text-xl font-semibold mb-3">Counter</h4>
      <p className="text-lg mb-3">Contador: {count}</p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
    </div>
  );
}

export default Counter;
