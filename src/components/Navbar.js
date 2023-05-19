import React from 'react'
import dubulogo from "../Assets/img/dubu icon.png";


function Navbar() {
  return (
    <div>
         {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            <span>
              <img width="52px" src={dubulogo} alt="" />
            </span>
          </a>

          <a id="h5" href="/explore">
            
          <h5>Explore</h5>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar; 
