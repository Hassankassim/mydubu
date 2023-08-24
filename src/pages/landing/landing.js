import React, { useState } from "react";
import cardimage1 from "../../Assets/img/whit bucket-50.png";
import cardimage2 from "../../Assets/img/whatsapp.png";
import cardimage3 from "../../Assets/img/vcf.png";
import Navbar from "../../components/Navbar";
import "./landing.css";
import Card1 from "../../components/UI/button/card";
import Createacc from "../Explore/Createacc";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ChooseUs from "./ChooseUs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Explore from  '../../User/dashboard/Userdashboard/Explore' 
import Learnmore from '../../components/UI/button/Learnmore'
import { Accordion } from "react-bootstrap";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
      <Box id="modalbx" sx={style}>
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
              <a href="\login">
                <button className="btn bg-dark explorebtn gara"> lOG IN</button>
               
              </a>
              <a   href="\Registration" > <button className="btn bg-transparent explorebtn gara">
               
               SIGN UP
             </button></a>
            </div>
          </div>
        </div>

        <div className="container61">
          {" "}
          <a href="\Comment">
            
          </a>
        </div>
        
        <div className="cardnew1">
          <div>
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

            </div>
<div>
            <Card1
              className="image"
              name="Jiunge kwenye Bucket zilizopo"
              image={cardimage3}
              title="Bucket mbalimbali"
              button="Join"
              linki="/Joiningbucket"
            />
          </div>
      <div>
            <Card1
              className="image"
              name="Web Cramping"
              image={cardimage2}
              title="makampuni mbalimbali"
              button="search"
              linki="/Explore"
            />
        </div>
      
        </div>
        <Container>
           <div>
            <h5 className="gara ">Why you should use us</h5>
          </div>
          <Row>
            <Col xs={{ order: "last" }}>
              <ChooseUs
                titlec="Expand Reach:"
                description=" Dubu helps you reach 
                more customers beyond your locality, 
                boosting visibility and growth."
              />
            </Col>
            <Col xs>
              <ChooseUs titlec="Flexible Tools" description=" Showcase products, manage inventory, and engage buyers easily 
              on Dubu's user-friendly platform." />
            </Col>
            <Col xs={{ order: "first" }}>
              <ChooseUs titlec="Community Support:" description=" Connect with other sellers, exchange insights, and learn from a collaborative business community." />
            </Col>
          </Row>
        </Container>
        <hr></hr>
      </div>

 
<div className="accdion1">
 <div className="accdion">
 <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="accordheader">
            wafanyabiashara wanawezaje kufaidika!?
          </Accordion.Header>
          <Accordion.Body>
            <strong>Kwa wafanyabiashara </strong>Hupitia changamoto ya kukosa
            Viewers wengi halisi kwenye matangazo yako hivyo hutumia Dubu kupata
            watu wengi zaid kweny contacts zake na kuongeza viewers wengi zaidi
            na wateja kwenye biashara yake.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Namna gani Dubu hufanya kazi! </Accordion.Header>
          <Accordion.Body>
            Dubu huanza kwa members kuifadhi(save) number zao (members) kwenye Buckets
            kisha baada ya kujaa au kufika idadi pendekezwa ,Admin husambaza
            link ya kudownload number hizo kwa watu wake,ambapo kila mmoja
            aliejaza number ndani ya bucket anatakiwa kudownload hio bucket
            kisha kufungua na kusave.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Usalama ndani ya Dubu</Accordion.Header>
          <Accordion.Body>
            Dubu inahakikisha kuna usalama katika kuhifadhi na kushare contacts
            kwa kufuata sheria na kanuni za usalama wa data
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      </div>
      
 </div>
 {/* <Explore /> */}
    </>
  );
}

export default Landing;
