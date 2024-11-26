import React from 'react';

function Toolbar() {
  function handleClick(buttonName) {
    alert(`Você clicou em: ${buttonName}`);
  }

  return (
    <div className="p-4 mb-6 border rounded bg-gray-50 shadow-md">
      <h4 className="text-xl font-semibold mb-3">Toolbar</h4>
      <div className="flex justify-around">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleClick('Play Movie')}
        >
          Play Movie
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleClick('Upload Image')}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
