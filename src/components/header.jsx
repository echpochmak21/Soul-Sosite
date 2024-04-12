import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <p> Soul Sosite</p>
        <ul className="header-links">
          <li><a href="/">Профиль</a></li>
          <li><a href="/about">Войти</a></li>
          <button className="register-button" onClick={handleRegisterClick} >Регистрация</button>
        </ul>
      </div>
      {showRegistration && (
        <div className="registration-window">
          {/* Content for registration window */}
          <h2>Регистрация</h2>
          {/* Add your registration form or content here */}
          <button onClick={() => setShowRegistration(false)}>Закрыть</button>
        </div>
      )}
    </header>
  );
};

export default Header;
