import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './footer.css';

const StickyFooterWithIcons = () => {
  return (
    <>
      <div>
        {/* Content */}
        {/* Sticky Footer */}
        <div id="nava2" variant="dark" className="fixed-bottom">
          <Container>
            <div className="icouse">
              <div className="social-icons">
                {/* Use NavLink instead of anchor tags */}
                <NavLink exact to="/Profile" className="social-icon" activeClassName="active">
                  <img width={'40px'}  alt="Facebook" />
                </NavLink>
                <NavLink exact to="/userdashboard" className="social-icon" activeClassName="active">
                  <img width={'40px'}  alt="Instagram" />
                </NavLink>
                <NavLink exact to="/Profile" className="social-icon" activeClassName="active">
                  <img width={'40px'} alt="LinkedIn" />
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default StickyFooterWithIcons;
