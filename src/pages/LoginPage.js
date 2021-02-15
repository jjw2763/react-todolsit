import React, { useState } from 'react';

const LoginPage = () => {
  const [type, setType] = useState('login');

  return (
    <div className="wrap_login">
      <form method="POST" className="loginForm">
        <h2>Login</h2>
        <div className="idForm">
          <input type="text" className="id" placeholder="ID"></input>
        </div>
        <div className="passForm">
          <input type="password" className="pw" placeholder="PW"></input>
        </div>
        <button type="button" className="btn">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
