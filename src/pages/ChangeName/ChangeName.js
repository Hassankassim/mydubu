import React, { useState } from 'react';
import '../ChangeName/ChangeName.css';

const ChangeName = ({ setName, setChangedClassName }) => {
  const [nameInput, setNameInput] = useState('');

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(nameInput);
    if (nameInput) {
      setChangedClassName('changed-h');
    } else {
      setChangedClassName('');
    }
  };

  return (
    <div className='allform2'>
      <div className="form-container">
        <div className="logo-container">
          Admin site
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your group name"
              required
              value={nameInput}
              onChange={handleNameChange}
            />
          </div>

          <button className="form-submit-btn" type="submit">Set Name</button>
        </form>

        <p className="signup-link">
          You are Not Admin?
          <a href="#" className="signup-link link">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default ChangeName;
