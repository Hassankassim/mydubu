import React from 'react';
import './login.css'
const Login = () => {
  return (
    <div className="container6">
      <div className="card4">
        <a className="login">Log in</a>
        <div className="inputBox">
          <input type="text" required="required" />
          <span className="user">Username</span>
        </div>

        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>

        <button className="enter">Enter</button>
      </div>
    </div>
  );
};

export default Login;
