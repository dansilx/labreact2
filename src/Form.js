import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Form</h4>
        <input class="form-control" placeholder="Digite qualquer coisa" type="text" value={text} onChange={handleChange} />
        <p class="mt-3">Você digitou: {text}</p>
    </div>
  );
}

export default Form;