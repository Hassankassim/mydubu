import React, { useState } from "react";
import cardimage1 from "../../Assets/img/whit bucket-50.png";
import cardimage2 from "../../Assets/img/whatsapp.png";
import cardimage3 from "../../Assets/img/vcf.png";
import Navbar from '../../components/Navbar'
import "./landing.css";
import Card1 from "../../components/UI/button/card";
import Createacc from "../Explore/Createacc";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box id = 'modalbx' sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Createacc />
        </Typography>
      </Box>
    </Modal>
  );
}

function Landing() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
    
      <div className="background">
        <div className="card51">
          <div className="card5 image-with-overlay">
            <div className="content">
              <span className="title1">
                Umepitia changamoto ya kushindwa kusave number za watu wengi kwa
                urahisi
              </span>

              <p className="desc ultra">"Je!, Umejaribu Dubu!"</p>
              <a href="\Learnmore">
               
              </a>
            </div>
          </div>
        </div>

        <div className="container61">
          {" "}
          <a href="\Comment">
            <button className="container62">KUHUSU SISI</button>
          </a>
        </div>
        <div className="cardnew1">
          <div className="">
            <Card1
              className="image"
              name="Tengeneza Bucket"
              image={cardimage1}
              title="Upate link-share "
              button="Create"
              onclick={handleCreateClick}
            />
            
            {/* Render the MUI modal */}
            <BasicModal open={modalOpen} handleClose={handleCloseModal} />
            
            <Card1
              className="image"
              name="Jiunge kwenye Bucket zilizopo"
              image={cardimage3}
              title="Bucket mbalimbali"
              button="Join"
              linki="/Joiningbucket"
            />
          </div>
          <div className="">
            <Card1
              className="image"
              name="tafuta number"
              image={cardimage2}
              title="makampuni mbalimbali"
              button="search"
              linki="/explore"
            />
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Landing;
