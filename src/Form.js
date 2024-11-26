import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="p-4 mb-6 border rounded bg-gray-50 shadow-md">
      <h4 className="text-xl font-semibold mb-3">Form</h4>
      <input
        className="w-full p-2 border rounded mb-3"
        placeholder="Digite qualquer coisa"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p className="text-lg">Você digitou: {text}</p>
    </div>
  );
}

export default Form;
