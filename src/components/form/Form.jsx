import React from 'react'
import { useState } from 'react';

export default function Form({submitFunction}) {

  const [formData, setFormData] = useState({ title: "", pages: 0, isFavorite: false, isRead: false})
  const [errorMessages, setErrorMessages] = useState([]);

  const handleChange = (event) => {
    setFormData(prevData => (
      {
        ...prevData,
        [event.target.name]:event.target.value
      }
    ))
  }

  function resetForm() {
    setFormData({ title: "", pages: 0 });
  }

  function isFormValid() {
    const errors = [];

    if (formData.title === "") {
      errors.push('O campo Título é obrigatório');
    }
    if (formData.pages <= 0) {
      errors.push('O campo Páginas precisa ser um número maior que zero');
    }
    setErrorMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.pages);
      resetForm();
      setErrorMessages([]);
    }
  }

  return (
    <form className="books-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Título"
      name="title"
      value={formData.title}
      onChange={handleChange}
    />

    <input
      type="number"
      placeholder="Páginas"
      name="pages"
      value={formData.pages}
      onChange={handleChange}
    />
    <br />
    {errorMessages.length > 0 && (
      <div className="form-message">
        {errorMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    )}

    <button 
      className="style-btn"
      type="submit"
      >Adicionar</button>
  </form>
  )
}
