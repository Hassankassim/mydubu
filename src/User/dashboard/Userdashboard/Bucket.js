import React, { useState } from "react";
// import Userdashboard from '../Userdashboard/Userdashboard'
import cardimage1 from "../../../Assets/img/whit bucket-50.png";
import cardimage2 from "../../../Assets/img/whatsapp.png";
import cardimage3 from "../../../Assets/img/vcf.png";

import "./Userdashboard.css";
import Card1 from "./carduser";
import Navbar from '../../../components/Navbar'
import { Col,Row,Container } from "react-bootstrap";
import ChooseUs from "../../../pages/landing/ChooseUs";
function Userdashboard() {

  return (
    <>
  
  
    
      <div className="background">
        
        <div className="card51">
          <div className="card5 image-with-overlay">
            <div className="content">
              <span className="title1">
               Get Connected to Your Costumers
              </span>

              <p className="desc ultra blue">"Experience the joy "</p>
             
            </div>
          </div>
        </div>

        <div className="container61">
          {" "}
          {/* <a href="#">
            <button className="container62 gara">YOUR BUCKETS</button>
          </a> */}
        </div>
        
        <div className="cardnew1">
        <div><h5 className="black gara">Get connected and share</h5></div>
          <div className="">
            <Card1
              className="image"
              name="Tengeneza Bucket"
              image={cardimage1}
              title="Upate link-share "
           linki="/Newbucket"

              
              
            />
            
          
            <Card1
              className="image"
              name="Jiunge kwenye Bucket zilizopo"
              image={cardimage3}
              title="Bucket mbalimbali"
              
              linki="/Joiningbucket"
            />
          </div>
          <div className="">
            <Card1
              className="image"
              name="tafuta number"
              image={cardimage2}
              title="makampuni mbalimbali"
           
              linki="/explore"
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

      </div>

    </>
  );
}

export default Userdashboard;
