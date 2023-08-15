import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../Assets/img/icondubu.png'
const NavbarExample = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/Landing">
        <img  width={'62px'} src={logo}></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-expanded={isNavOpen}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{/* Add your menu items here */}</ul>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-globe">
                
              </i>
              explore
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 bg-dark" type="submit">
        Call Us
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarExample;
