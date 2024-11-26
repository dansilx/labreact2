import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="p-4 mb-4 border rounded-lg bg-gray-100">
      <h4 className="text-lg font-semibold">Forms com múltiplas entradas</h4>
      <input
        className="form-control mt-3 border border-gray-300 rounded p-2 w-full"
        placeholder="Digite o nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="form-control mt-3 border border-gray-300 rounded p-2 w-full"
        placeholder="Digite o email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="mt-3">Dados digitados: {formData.name} - {formData.email}</p>
    </div>
  );
}

export default Forms;
