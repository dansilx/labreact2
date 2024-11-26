import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function incrementCounter(index) {
    const newCounters = counters.map((count, i) => (i === index ? count + 1 : count));
    setCounters(newCounters);
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100">
      <h4 className="text-lg font-semibold">Counter List</h4>
      {counters.map((count, index) => (
        <div key={index} className="mt-3">
          <p className="text-sm">Contador {index + 1}: {count}</p>
          <button
            className="btn btn-primary mt-2"
            onClick={() => incrementCounter(index)}
          >
            Incrementar
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;
