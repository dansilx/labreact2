import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function incrementCounter(index) {
    const newCounters = counters.map((count, i) => (i === index ? count + 1 : count));
    setCounters(newCounters);
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Counter List</h4>
        {counters.map((count, index) => (
            <div key={index}>
            <p>Contador {index + 1}: {count}</p>
            <button class="btn btn-success mb-5" onClick={() => incrementCounter(index)}>Incrementar</button>
            </div>
        ))}
    </div>
  );
}

export default CounterList;