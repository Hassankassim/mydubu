import React, { useState } from "react";
// import Userdashboard from '../Userdashboard/Userdashboard'
import cardimage1 from "../../../Assets/img/whit bucket-50.png";
import cardimage2 from "../../../Assets/img/whatsapp.png";
import cardimage3 from "../../../Assets/img/vcf.png";
import Footeruser from '../Userfooter'
import "./Userdashboard.css";
import Card1 from "./carduser";
import Navbar from '../../../components/Navbar'


function Userdashboard() {

  return (
    <>
    <div> <Navbar 
    link1="Contact"
    link2="Learn"
    /></div>
  
    
      <div className="background">
        
        <div className="card51">
          <div className="card5 image-with-overlay">
            <div className="content">
              <span className="title1">
                Umepitia changamoto ya kushindwa kusave number za watu wengi kwa
                urahisi
              </span>

              <p className="desc ultra">"Je!, Umejaribu Dubu!"</p>
             
            </div>
          </div>
        </div>

        <div className="container61">
          {" "}
          <a href="\Explore">
            <button className="container62">1000+ users</button>
          </a>
        </div>
        
        <div className="cardnew1">
        <div><h5 className="black">Available Buckets</h5></div>
          <div className="">
            <Card1
              className="image"
              name="Tengeneza Bucket"
              image={cardimage1}
              title="Upate link-share "
           

              
              
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
      </div>
<Footeruser />
    </>
  );
}

export default Userdashboard;
