import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './styles.css';
import dubulogo from './img/dubu icon.png'

function App() {

  

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand"><span><img width="52px" src={dubulogo} alt="" /></span></a>

          <a id="h5" href=""><h5>Explore</h5></a>

        </div>
      </nav>

      {/* Main content */}
      <div className="container mt-5">
        <div className="title">
          <h3>TheBucket</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-group has-default bmd-form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="form-group bmd-form-group">
              <label htmlFor="exampleInput1" className="bmd-label-floating">Phone Number</label>
              <input type="email" className="form-control" id="exampleInput1" />
              <span className="bmd-help">+255.....</span>
            </div>
            <div className="button1">
              <button type="submit" className="neu-button">Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="futa" style={{ height: '430px' }}></div>

    </>
  );
}

export default App;
