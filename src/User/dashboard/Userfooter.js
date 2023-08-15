import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Userfooter.css';
import image5 from '../../Assets/img/whatsapp.png';
import image6 from '../../Assets/img/BUCKET icon.png';
import image7 from '../../Assets/img/profile icon.png';
import image8 from '../../Assets/img/explore icon.png';

const StickyFooterWithIcons = () => {
  return (
    <>
      <div>
        {/* Content */}
        {/* Sticky Footer */}
        <div id="nava" variant="dark" className="fixed-bottom">
          <Container>
            <div className="icouse">
              <div className="social-icons">
                {/* Use NavLink instead of anchor tags */}
                <NavLink exact to="/Profile" className="social-icon" activeClassName="active">
                  <img width={'40px'} src={image8} alt="Facebook" />
                </NavLink>
                <NavLink exact to="/userdashboard" className="social-icon" activeClassName="active">
                  <img width={'40px'} src={image6} alt="Instagram" />
                </NavLink>
                <NavLink exact to="/Profile" className="social-icon" activeClassName="active">
                  <img width={'40px'} src={image7} alt="LinkedIn" />
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
