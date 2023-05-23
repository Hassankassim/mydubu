import React from 'react'
import dubulogo from "../Assets/img/dubu icon1.png";


function Navbar() {
  return (
    <div>
         {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href='/landing'>
            <span>
              <img width="52px" src={dubulogo} alt="" />
            </span>
          </a>

          <a id="h5" href="/explore">
            
         <button className='explorebtn' >Explore</button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar; 
