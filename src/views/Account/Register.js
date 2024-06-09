import React, { useState } from 'react';
import './Account.scss';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputErrors, setInputErrors] = useState({
    userName: false,
    password: false,
    firstName: false,
    lastname: false,
    email: false,
  });

  const handleContinue = () => {
    const errors = {};
    if (!userName) {
      errors.userName = true;
    }
    if (!password) {
      errors.password = true;
    }
    if (!firstName) {
      errors.firstName = true;
    }
    if (!lastname) {
      errors.lastname = true;
    }
    if (!email) {
      errors.email = true;
    }

    setInputErrors(errors);

    if (Object.keys(errors).length === 0) {

      console.log('Valid information:', {
        firstName,
        userName,
        lastname,
        email,
        password
      });
    } else {
      console.log('Please complete all information.');
    }
  };


  const handleGoogleLogin = (response) => {

  };

  const handleFacebookLogin = (response) => {

  };

  return (
    <div className="containerRegister">
      <h1 className="title">Healthcare</h1>
      <p className="subtitle">Please enter information to sign up</p>
      <input
        type="text"
        placeholder="User name"
        className="input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {inputErrors.userName && <p className="error-text">Please enter username!</p>}
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {inputErrors.password && <p className="error-text">Please enter a password!</p>}
      <input
        type="text"
        placeholder="First name"
        className="input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {inputErrors.firstName && <p className="error-text">Please enter first name!</p>}
      <input
        type="text"
        placeholder="Last name"
        className="input"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      {inputErrors.lastname && <p className="error-text">Please enter your first and last name!</p>}
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {inputErrors.email && <p className="error-text">Please enter email!</p>}

      <button
        className="button"
        onClick={handleContinue}
      >
        Sign up
      </button>
      <hr className="divider" />
      <p className="subtitle">Or sign up with an account</p>
      <button
        className="login-buttons"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
      <button
        className="facebook-button"
        onClick={handleFacebookLogin}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default Register;
