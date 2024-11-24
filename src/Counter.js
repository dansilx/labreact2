import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Counter</h4>
        <p>Contador: {count}</p>
        <button class="btn btn-success" onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;