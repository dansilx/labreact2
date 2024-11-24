import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light">
        <h4>Forms com múltiplas entradas</h4>
        <input class="form-control" placeholder="Digite o nome" name="name" value={formData.name} onChange={handleChange} />
        <input class="form-control" placeholder="Digite o email" name="email" value={formData.email} onChange={handleChange} />
        <p class="mt-3">Dados digitados: {formData.name} - {formData.email}</p>
    </div>
  );
}

export default Forms;