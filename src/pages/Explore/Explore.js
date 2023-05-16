import React from 'react'
import '/src/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import dubulogo from '/src/Assets/img/dubu icon.png'
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

function Explore() {
  return (
    <div>

<nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span>
              <img width="52px" src={dubulogo} alt="" />
            </span>
          </a>

          <a id="h5" href="">
            <h5>Explore</h5>
          </a>
        </div>
      </nav>

    </div>
  )
}

export default Explore