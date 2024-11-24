import React from 'react';

function Toolbar() {
  function handleClick(buttonName) {
    alert(`Você clicou em: ${buttonName}`);
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light">
      <h4>Toolbar</h4>
      <div class="d-flex justify-content-around">
        <button class="btn btn-success" onClick={() => handleClick('Play Movie')}>Play Movie</button>
        <button class="btn btn-success" onClick={() => handleClick('Upload Image')}>Upload Image</button>
      </div>
    </div>
  );
}

export default Toolbar;