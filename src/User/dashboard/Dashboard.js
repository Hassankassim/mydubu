import React, { useState } from 'react';
import './Dashboard.css' // Create a CSS file for custom styles and import it here
import userImg from '../../Assets/img/whatsapp.png'
import smsImg from '../../Assets/img/whatsapp.png'
import notificationImg from '../../Assets/img/whatsapp.png'
import logoImg from '../../Assets/img/whatsapp.png'
import dashboardImg from '../../Assets/img/whatsapp.png'
// Import images as React components



const MyComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMouseEnterLink = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeaveLink = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="hamburger" onClick={handleToggleSidebar}>
          <div className={`cta ${sidebarOpen ? 'active' : ''}`}>
            <div className="toggle-btn type14"></div>
          </div>
        </div>

        <a className="navbar-brand" href="#">
          <img src={logoImg} alt="logo" style={{ width: '140px' }} />
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={notificationImg} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={smsImg} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={userImg} alt="" />
            </a>
          </li>
        </ul>
      </nav>

      <section className={`side-bar-warp ${sidebarOpen ? 'full-side-bar' : ''}`}>
        <div className={`sidebar-menu ${sidebarOpen ? '' : 'flowHide'}`}>
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onMouseEnter={handleMouseEnterLink}
                  onMouseLeave={handleMouseLeaveLink}
                >
                  <span className="sidebar-icon">
                    <img src={dashboardImg} alt="" />
                  </span>
                  <span className={`fadeInRight animated nav-link-name ${sidebarOpen ? '' : 'name-hide'}`}>
                    Dashboard
                  </span>
                </a>
              </li>
              {/* Add other list items for other links */}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
