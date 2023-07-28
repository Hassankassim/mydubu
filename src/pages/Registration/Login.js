import React from 'react';
import './login.css'
const Login = () => {
  return (
    <div className="container8">
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

        <button  className="enter">Enter</button>
       <a href='/Dashboard' > <p>You forgot password!?</p></a>
     </div>
    </div>
  );
};

export default Login;
