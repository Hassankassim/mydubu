import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import icondubu from '../Assets/img/icondubu.png';
import togglebtn from '../Assets/img/navbar toggle.png'

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 1500 });

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Navbar  expand="lg" className=" navbar mb-0">
      <Container fluid>
        <Navbar.Brand href="/landing">
          <span>
            <img id="icondubu" src={icondubu} alt="Icon" />
          </span>
       
        </Navbar.Brand>
        {isLargeScreen ? (
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
        ) : (
          <Button   variant="none" onClick={toggleOffcanvas}>
          <span className='togglebtn' ><img height={"25px"} width={"20px"} src={togglebtn} /></span>
          </Button>
        )}
        <Offcanvas placement="end" show={showOffcanvas} onHide={() => setShowOffcanvas(false)} className=" offcanvas">
          <Offcanvas.Header className='bgprimary' closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">DuBu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='ul1' href="/landing">Home</Nav.Link>
              <Nav.Link className='ul1' href="/explore">About</Nav.Link>
              <Nav.Link className='ul1' href="/explore">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
