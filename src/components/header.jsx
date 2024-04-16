import React, { useState } from 'react';
import './header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setPasswordError('Пароль должен содержать как минимум 2 цифры и хотя бы одну заглавную букву.');
      return;
    }
    // Handle registration or login logic here
    console.log(formData);
    setShowRegistration(false);
    setShowLogin(false); 
    setFormData({
      username: '',
      email: '',
      password: ''
    });
    setPasswordError('');
  };

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseClick = () => {
    setShowRegistration(false);
    setShowLogin(false); 
    setPasswordError('');
  };

  const validatePassword = (password) => {
    const digitRegex = /\d/g; // Регулярное выражение для цифр
    const capitalLetterRegex = /[A-Z]/; // Регулярное выражение для заглавных букв

    // Проверяем, содержит ли пароль как минимум 2 цифры и хотя бы одну заглавную букву
    const containsTwoDigits = (password.match(digitRegex) || []).length >= 2;
    const containsCapitalLetter = capitalLetterRegex.test(password);

    return containsTwoDigits && containsCapitalLetter;
  };

  return (
    <header className="header-container">
      <div className="header-content">
      <img src={logo} alt="Логотип" className="logo-image" />
        <ul className="header-links">
          <li><button className="login-button" onClick={handleLoginClick}>Войти</button></li>
          <button className="register-button" onClick={handleRegisterClick}>Регистрация</button>
        </ul>
      </div>
      {(showRegistration || showLogin) && (
        <div className="registration-overlay">
          <div className="registration-window">
            <button className="close-button" onClick={handleCloseClick}>×</button>
            <div className="registration-content">
              <h2>{showRegistration ? 'Регистрация' : 'Вход'}</h2>
              <form onSubmit={handleSubmit}>
                {!showLogin && (
                  <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Пароль:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <div className="form-group">
                  <button type="submit" className="button">{showRegistration ? 'Зарегистрироваться' : 'Войти'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
