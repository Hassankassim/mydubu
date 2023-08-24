import React from "react";
import "./Registration.css";
import Navbar from "../../components/Navbar";

class RegistrationForm extends React.Component {
  render() {
    return (
      <>
        <Navbar linkico="/Landing" />
        <div className="b1">
          <form className="formh">
            <p className="title">Register</p>
            <p className="message">
              Signup now and get full access to our app.
            </p>

            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Username</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
              />
              <span>Password</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className="input"
              />
              <span>Confirm password</span>
            </label>
            <button className="submit">Submit</button>
            <p className="signin">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default RegistrationForm;
