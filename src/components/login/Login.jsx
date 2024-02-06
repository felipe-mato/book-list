import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  function isFormValid() {
    const errors = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(name === "") {
      errors.push("O campo Nome é obrigatório!")
    }
    if (!emailRegex.test(email)) {
      errors.push("Digite um email válido! exemplo: 'email@exemplo.com'");
    }    
    setErrorMessages(errors)
    return errors.length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormValid()) {
    onLogin(name, email);
    setErrorMessages([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {errorMessages.length > 0 && (
            <div className="form-message">
            {errorMessages.map(message => (
              <p key={message}>{message}</p>
            ))}
          </div>
            )}
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
